import { useState, useEffect, Fragment } from "react";
import { Layout, Nav, BottomNavigate, CardWallet } from "../components";
import { PaidOutlined, WalletOutlined, QueryStatsOutlined } from "@mui/icons-material";
import Link from "next/link";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

export default function SimpleBottomNavigation() {
  const [wallet, setWallet] = useState({});
  const [transaction, setTransaction] = useState([]);

  const getLogTransaction = async (accountId, walletAddress, config) => {
    try {
      const res = await axios.get(`http://localhost:8280/transaction-api/v1/transaction/log/${accountId}/${walletAddress}`, config);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
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
      setCookie('wallet', resWallet.data)
      getLogTransaction(account.accountNo, resWallet.data.walletAddress, config);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <Layout title={"หน้าแรก"}>
      <Nav />
      <section className="flex-grow w-full mt-5">
        <CardWallet amount={wallet.walletBalance} account={wallet.walletAddress} />
        <div className="w-full flex flex-col justify-center px-3 py-5">
          <hr className="border-zinc-300" />
          <p className="w-full text-left mt-5 font-bold text-sm">การทำรายการล่าสุด</p>
          <div className="w-full flex pt-4 gap-x-5 overflow-x-auto">
            {transaction.map((items, index) => {
              const money = items.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
              return (
                <div key={index} className="flex flex-col items-center flex-none">
                  <div
                    className={
                      "border-2 rounded-full w-20 h-20  flex items-center justify-center font-extrabold text-xs " +
                      (items.transactionType != "WITHDRAWAL" ? "bg-primary/20 text-primary" : "bg-error/20 text-error")
                    }
                  >
                    {money}
                  </div>
                  <p className="text-xs mt-2">{items.transactionType == "WITHDRAWAL" ? "ถอนเงินจาก" : "รับเงินจาก"}</p>
                  <p className="text-xs text-center">{items.accountNo}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full rounded-t-2xl  border-t border-zinc-300 mt-2 px-3 py-5">
          <p className="font-semibold text-sm">เมนูทำรายการ</p>
          <div className="flex items-center justify-start gap-x-5 mt-5">
            <Link
              href="/exchange"
              className="bg-primary/20 rounded-md h-20 w-20 flex flex-col items-center justify-center text-primary shadow-xl duration-300 hover:scale-90"
            >
              <PaidOutlined className="text-3xl font-bold" />
              <p>โอนเงิน</p>
            </Link>
            <Link
              href="/topup"
              className="bg-primary/20 rounded-md h-20 w-20 flex flex-col items-center justify-center text-primary shadow-xl duration-300 hover:scale-90"
            >
              <WalletOutlined className="text-3xl font-bold" />
              <p>เติมเงิน</p>
            </Link>
          </div>
        </div>
      </section>
      <BottomNavigate />
    </Layout>
  );
}
