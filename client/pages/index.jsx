import { useState } from "react";
import { Layout, Nav, BottomNavigate, CardWallet } from "../components";
import { PaidOutlined, WalletOutlined, QueryStatsOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function SimpleBottomNavigation() {
  const [transaction, setTransaction] = useState([
    { status: true },
    { status: true },
    { status: true },
    { status: true },
    { status: true },
    { status: true },
  ]);

  return (
    <Layout title={"หน้าแรก"}>
      <Nav />
      <section className="flex-grow w-full mt-5">
        <CardWallet />
        <div className="w-full flex flex-col justify-center px-3 py-5 mt-5">
          <hr className="border-zinc-300" />
          <p className="w-full text-left mt-5 font-bold text-sm">การทำรายการล่าสุด</p>
          <div className="w-full flex pt-4 gap-x-5 overflow-x-auto">
            {transaction.map((items, index) => {
              return (
                <div key={index} className="flex flex-col items-center flex-none">
                  <div
                    className={
                      "border-2 rounded-full w-16 h-16  flex items-center justify-center font-extrabold  text-xl " +
                      (items.status ? "bg-primary/20 text-primary" : "bg-error/20 text-error")
                    }
                  >
                    +500
                  </div>
                  <p className="text-xs mt-2">รับเงินจาก</p>
                  <p className="text-xs">123-456-7890</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full rounded-t-2xl  border-t border-zinc-300 mt-2 px-3 py-5">
          <p className="font-semibold text-sm">เมนูทำรายการ</p>
          <div className="flex items-center justify-start gap-x-5 mt-5">
            <Link href="/exchange" className="bg-primary/20 rounded-md h-20 w-20 flex flex-col items-center justify-center text-primary shadow-xl">
              <PaidOutlined className="text-3xl font-bold" />
              <p>โอนเงิน</p>
            </Link>
            <Link href="/topup" className="bg-primary/20 rounded-md h-20 w-20 flex flex-col items-center justify-center text-primary shadow-xl">
              <WalletOutlined className="text-3xl font-bold" />
              <p>เติมเงิน</p>
            </Link>
            <Link href="" className="bg-primary/20 rounded-md h-20 w-20 flex flex-col items-center justify-center text-primary shadow-xl">
              <QueryStatsOutlined className="text-3xl font-bold" />
              <p>ภาพรวม</p>
            </Link>
          </div>
        </div>
      </section>
      <BottomNavigate />
    </Layout>
  );
}
