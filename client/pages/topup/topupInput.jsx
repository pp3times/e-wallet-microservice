import { AcceptModal, Layout } from "../../components";
import Link from "next/link";
import { useState } from "react";
import { ArrowBackIos } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const TopupInput = () => {
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState("0252788239")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Error = ({ name }) => {
    return errors[name] && <span className="text-red-600 text-xs">{errors[name]?.message}</span>;
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      setOpen(true);
    } catch (error) {
      console.log(errors);
      //   setAlert(error.response?.data?.message || error.message);
    }
  };

  return (
    <Layout title="กรอกข้อมูล">
      <AcceptModal open={open} setOpen={setOpen} amount={watch("amount")} goal={goal}/>
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
            <p className="text-3xl font-bold">150,00.49 บาท</p>
            <p className="font-bold text-sm">บัญชี 123-456-7890</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-t-xl flex-grow py-10 h-full w-full mt-10 px-5 pt-4 text-black flex flex-col justify-between"
        >
          <div className="">
            <p className="font-bold text-sm">กรอกจำนวนเงิน</p>
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

export default TopupInput;
