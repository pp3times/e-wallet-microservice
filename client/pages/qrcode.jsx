import { ArrowBackIos } from "@mui/icons-material";
import { Modal, Typography, TextField, Button } from "@mui/material";
import Link from "next/link";
import { Layout } from "../components";
import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import { useQRCode } from "next-qrcode";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/router";

const MyQrCode = () => {
  const { Image } = useQRCode();
  const [account, setAccount] = useState({});
  const [wallet, setWallet] = useState({});

  useEffect(() => {
    setAccount(JSON.parse(getCookie("account")));
    setWallet(JSON.parse(getCookie("wallet")));

    console.log(wallet);
  }, []);

  return (
    <div className="w-full">
      <div className="bg-primary p-4 text-white text-center rounded-t-xl">S-WALLET QR</div>
      <div className="bg-white text-center text-black p-4">
        <Image text={`{"walletAddress":"${wallet?.walletAddress}"}`} options={{ type: "image/jpeg", width: 1200 }} />
        <div className="space-y-1 text-sm">
          <p className="text-primary font-bold">Scan QR to transfer to account</p>
          <p>
            Name: {account?.firstName} {account?.lastName}
          </p>
          <p>Wallet Address: {wallet?.walletAddress}</p>
        </div>
      </div>
      <div className="flex gap-4 bg-white rounded-b-xl p-4 text-black justify-center items-center border-t-2 border-primary">
        <img src="./logo.svg" className="h-8" alt="" />
      </div>
    </div>
  );
};

const Qrcode = () => {
  const [mode, setMode] = useState("pay");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [goalAddress, setGoalAddress] = useState({});
  const [amount, setAmount] = useState(0);

  const router = useRouter();

  const changeMode = (mode) => {
    setMode(mode);
  };

  const Scanner = () => {
    const cameraRef = useRef(false);

    const startCamera = () => {
      if (cameraRef.current) return;

      cameraRef.current = true;

      const html5QrCode = new Html5Qrcode("reader");
      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        html5QrCode
          .stop()
          .then((ignore) => {
            const data = JSON.parse(decodedText);
            setGoalAddress(data);
            handleOpen();
            /** Wallet Address is here */
          })
          .catch((err) => {
            console.log("Error", err.message);
          });
      };
      const config = { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.0 };
      html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
    };

    useEffect(() => {
      startCamera();
    }, []);

    return <div id="reader" className="w-full"></div>;
  };

  const handleSubmit = async () => {
    try {
      const user = JSON.parse(getCookie("user"));
      const wallet = JSON.parse(getCookie("wallet"));

      let transfer = {
        amount: Number(amount),
        destinationWalletAddress: goalAddress.walletAddress,
        sourceWalletAddress: wallet.walletAddress,
      };

      const config = {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      };
      const res = await axios.post("http://localhost:8280/transaction-api/v1/wallet/transfer", transfer, config);
      setAmount(0);
      handleClose();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"QR Code"}>
      <Modal
        className="flex items-center justify-center"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex flex-col items-center w-11/12 bg-white p-10 gap-y-5">
          <p className="font-bold text-xl block mb-5">กรอกจำนวนเงิน</p>
          <TextField
            onChange={(event) => {
              setAmount(event.target.value);
            }}
            className="w-full"
            type="number"
            label="จำนวนเงิน"
            variant="outlined"
          />
          <div className="flex w-full items-center gap-x-5">
            <button onClick={handleSubmit} className="w-1/2 py-2 rounded-md text-error border border-error">
              ยกเลิก
            </button>
            <button onClick={handleSubmit} className="w-1/2 py-2 rounded-md bg-primary text-white">
              ยืนยัน
            </button>
          </div>
        </div>
      </Modal>
      <div className="bg-primary h-screen w-full pt-5 text-white flex flex-col">
        <div className="flex items-center w-full px-5 pb-4">
          <Link href="/">
            <ArrowBackIos />
          </Link>
          <p className="font-bold">QRCODE รับ/จ่าย</p>
        </div>
        <div className="grid grid-cols-2">
          <button
            className={`p-2 w-fit mx-auto duration-300 border-b-2 ${mode === "pay" ? " border-white" : "border-transparent"}`}
            onClick={() => changeMode("pay")}
          >
            สำหรับจ่ายเงิน
          </button>
          <button
            className={`p-2 w-fit mx-auto duration-300 border-b-2 ${mode === "receive" ? " border-white" : "border-transparent"}`}
            onClick={() => changeMode("receive")}
          >
            สำหรับรับเงิน
          </button>
        </div>
        <div className="grow bg-gradient-to-br from-[#29E07F] to-[#024422] rounded-t-xl">
          <div className="h-full w-full bg-gradient-to-b from-black to-transparent flex items-center justify-center p-8">
            {mode === "pay" ? <Scanner /> : <MyQrCode />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Qrcode;
