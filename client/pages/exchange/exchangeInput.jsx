import { AcceptModalExchange, Layout } from "../../components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowBackIos } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { getCookie } from "cookies-next";

const ExchangeInput = () => {
  const [open, setOpen] = useState(false);
  const [wallet, setWallet] = useState({})

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Error = ({ name }) => {
    return errors[name] && <span className="text-red-600 text-xs">{errors[name]?.message}</span>;
  };

  const getWallet = async () => {
    try {
      const user = JSON.parse(getCookie("user"));
      const account = JSON.parse(getCookie("account"));
      const config = {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      };
      const resWallet = await axios.get(`http://localhost:8282/account-api/v1/wallet/wallet/${account.accountId}`, config);

      setWallet(resWallet.data);
      getLogTransaction(account.accountId, wallet.walletAddress, config);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  const onSubmit = async (data) => {
    try {
      setOpen(true);
    } catch (error) {
      console.log(errors);
    }
  };

  return (
    <Layout title="กรอกข้อมูล">
      <AcceptModalExchange open={open} setOpen={setOpen} amount={watch("amount")} goal={watch("goal")} />
      <div className="bg-primary h-screen w-full pt-5 text-white flex flex-col">
        <div className="flex items-center w-full px-5">
          <Link href="/">
            <ArrowBackIos />
          </Link>
          <p className="font-bold">เติมเงิน</p>
        </div>
        <div className="flex flex-col gap-y-10 px-5 mt-5">
          <div className="flex flex-col items-start justify-between w-full gap-y-5  text-white">
            <p className="font-bold text-xs">จำนวนเงินคงเหลือ</p>
            <p className="text-3xl font-bold">{wallet.walletBalance} บาท</p>
            <p className="font-bold text-sm">บัญชี {wallet.walletAddress}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-t-xl flex-grow py-10 h-full w-full mt-10 px-5 pt-4 text-black flex flex-col justify-between"
        >
          <div className="">
            <p className="font-bold text-sm">กรอกเลขบัญชีปลายทาง</p>
            <TextField
              color={errors.goal ? "error" : "primary"}
              className="w-full mt-5"
              label="กรอกเลขบัญชีปลายทาง"
              variant="outlined"
              {...register("goal", { required: "กรอกเลขบัญชีปลายทาง" })}
            />
            <Error name="goal" />
            <p className="font-bold text-sm mt-10">กรอกจำนวนเงิน</p>
            <TextField
              color={errors.amount ? "error" : "primary"}
              className="w-full mt-5"
              label="ใส่จำนวนเงิน"
              variant="outlined"
              {...register("amount", { required: "กรอกจำนวนเงิน" })}
            />
            <Error name="amount" />
          </div>
          <div className="w-full flex justify-between px-5">
            <Link href="/">ยกเลิก</Link>
            <button>ถัดไป</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ExchangeInput;
