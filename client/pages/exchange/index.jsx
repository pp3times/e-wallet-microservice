import { Layout } from "../../components";
import Link from "next/link";
import { ArrowBackIos, WalletOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";

const Exchange = () => {
  const [transaction, setTransaction] = useState([{ status: false }, { status: false }, { status: false }, { status: false }, { status: true }]);
  const [wallet, setWallet] = useState({})
  const getWallet = async () => {
    try {
      const getWallet = await axios.get(`http://localhost:8282`)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getWallet();
  }, []);
  return (
    <Layout title="เติมเงิน">
      <div className="bg-primary h-screen w-full pt-5 text-white flex flex-col">
        <div className="flex items-center w-full px-5">
          <Link href="/">
            <ArrowBackIos />
          </Link>
          <p className="font-bold">โอนเงิน</p>
        </div>
        <div className="flex flex-col items-start mt-5 px-5">
          <p className="font-bold text-sm">รายการโอนเงินล่าสุด</p>
          <div className="flex items-center gap-x-5 pt-4 overflow-x-auto w-full">
            {transaction.map((items, index) => {
              return (
                <div key={index} className="flex flex-col items-center flex-none">
                  <div
                    className={
                      "border-4 rounded-full w-16 h-16 flex items-center justify-center font-extrabold text-xl " +
                      (items.status == false && "bg-error")
                    }
                  >
                    {items.status == false ? "-500" : "+500"}
                  </div>
                  <p className="text-xs mt-2">{items.status == false ? "โอนเงินออก" : "รับเงินเข้า"}</p>
                  <p className="text-[10px]">{items.status == false ? "จากบัญชี" : "เข้าบัญขี"} 123-456-7890</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white rounded-t-xl w-full flex-grow mt-10 px-5 pt-4 text-black">
          <p className="font-bold text-sm">เลือกบัญชีทำรายการ</p>
          <div className="flex items-center mt-5 gap-x-5">
            <Link href="/exchange/exchangeInput" className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-2 border-4">
                <WalletOutlined className="text-5xl text-blue-900" />
              </div>
              <p className="text-xs font-semibold mt-2">บัญขีหลัก</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Exchange;
