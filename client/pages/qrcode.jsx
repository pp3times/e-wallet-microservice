import { ArrowBackIos, Mode } from "@mui/icons-material";
import Link from "next/link";
import { Layout } from "../components";
import { Html5Qrcode } from "html5-qrcode"
import { useEffect, useRef, useState } from "react";
import { useQRCode } from 'next-qrcode';

const Scanner = () => {
  const cameraRef = useRef(false);

  const startCamera = () => {
    if (cameraRef.current) return;

    cameraRef.current = true;

    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      /* handle success */
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.0 };
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
  }

  useEffect(() => {
    startCamera();
  }, [])

  return (
    <div id="reader" className="w-full"></div>
  );
}

const Qrcode = () => {
  const [mode, setMode] = useState('pay');
  const changeMode = (mode) => {
    setMode(mode);
  }

  const firstname = 'Thanawat';
  const lastname = 'Jantawong';
  const walletAddress = '123-456-7890';
  const refID = '1234567890';

  const { Image } = useQRCode();
  const qrCodeData = `{"refId":1234567890}`;

  return (
    <Layout title={'QR Code'}>
      <div className="bg-primary h-screen w-full pt-5 text-white flex flex-col">
        <div className="flex items-center w-full px-5 pb-4">
          <Link href="/">
            <ArrowBackIos />
          </Link>
          <p className="font-bold">QRCODE รับ/จ่าย</p>
        </div>
        <div className="grid grid-cols-2">
          <button className={`p-2 w-fit mx-auto duration-300 border-b-2 ${mode === 'pay' ? ' border-white' : 'border-transparent'}`} onClick={() => changeMode('pay')}>สำหรับจ่ายเงิน</button>
          <button className={`p-2 w-fit mx-auto duration-300 border-b-2 ${mode === 'receive' ? ' border-white' : 'border-transparent'}`} onClick={() => changeMode('receive')}>สำหรับรับเงิน</button>
        </div>
        <div className="grow bg-gradient-to-br from-[#29E07F] to-[#024422] rounded-t-xl">
          <div className="h-full w-full bg-gradient-to-b from-black to-transparent flex items-center justify-center p-8">
            {
              mode === 'pay'
                ? <Scanner />
                : (
                  <div className="w-full">
                    <div className="bg-primary p-4 text-white text-center rounded-t-xl">S-WALLET QR</div>
                    <div className="bg-white text-center text-black p-4">
                      <Image text={qrCodeData} options={{ type: 'image/jpeg', width: 1200 }} />
                      <div className="space-y-1 text-sm">
                        <p className="text-primary font-bold">Scan QR to transfer to account</p>
                        <p>Name: {firstname} {lastname}</p>
                        <p>Wallet Address: {walletAddress}</p>
                        <p className="opacity-50">Ref ID: {refID}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 bg-white rounded-b-xl p-4 text-black justify-center items-center border-t-2 border-primary">
                      <img src="./logo.svg" className="h-8" alt="" />
                      <p className="text-xs">Accepts all banks | รับเงินได้จากทุกบัญชี</p>
                    </div>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Qrcode;