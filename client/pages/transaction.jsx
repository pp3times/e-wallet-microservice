import { Layout, Nav, BottomNavigate } from "../components";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
const Profile = () => {
  const [wallet, setWallet] = useState({});
  const [account, setAccount] = useState({});
  const [transactions, setTransactions] = useState([]);

  const getLogTransaction = async (accountId, walletAddress, config) => {
    try {
      console.log(accountId, walletAddress);
      const res = await axios.get(`http://localhost:8280/transaction-api/v1/transaction/log/${accountId}/${walletAddress}`, config);
      console.log(res.data);
      setTransactions(res.data);
    } catch (error) {
      console.log(res);
    }
  };

  const getWallet = async () => {
    try {
      const user = JSON.parse(getCookie("user"));
      const account = JSON.parse(getCookie("account"));
      setAccount(account);
      const config = {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      };
      const resWallet = await axios.get(`http://localhost:8282/account-api/v1/wallet/wallet/${account.accountId}`, config);
      setWallet(resWallet.data);
      getLogTransaction(account.accountNo, resWallet.data.walletAddress, config);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <Layout title="ประวัติการทำรายการ">
      <Nav />
      <section className="flex-grow w-full mt-5 px-5">
        <p className="font-bold text-sm">ประวัติการทำรายการ</p>
        <div className="relative rounded-lg shadow-xl flex flex-col items-center w-full mt-4">
          <div className=" bg-gradient-to-br from-primary to-[#024422] p-10 rounded-md w-full flex items-start">
            <div className="flex flex-col items-center justify-between w-full gap-y-5  text-white">
              <p className="font-bold text-sm">จำนวนเงินคงเหลือ</p>
              <p className="text-3xl font-bold">{wallet?.walletBalance?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท</p>
              <p className="font-bold text-sm text-center">หมายเลขบัญชี <span className="block">{wallet?.walletAddress} </span> </p>
            </div>
            <svg className="absolute right-0" width="124" height="142" viewBox="0 0 124 142" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64.0823 -43.4655L225.937 74.6562L0.628193 146.596L64.0823 -43.4655Z" fill="#27D97B" fillOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="mt-8 mb-36 divide-y">
          {transactions.map((transaction, index) => {
            return (
              <div key={index}>
                <div className="py-2">
                  <h1>{transaction.transactionType !== "WITHDRAWAL" ?"รับเงินเข้า":"ถอนเงินออก"}</h1>
                  <p className="text-2xl">{transaction.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} บาท</p>
                  <div className="flex justify-between text-xs">
                    <p>
                      {transaction.transactionType !== "WITHDRAWAL" ? "จากบัญชี" : "เข้าบัญชี"} {transaction.accountNo}
                    </p>
                    <p>{transaction.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <BottomNavigate />
    </Layout>
  );
};

export default Profile;
