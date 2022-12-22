import { Layout, Nav, BottomNavigate } from "../components";
import { useState } from "react";
const Profile = () => {
  const transactions = [
    {
      type: 'รับเงินเข้า',
      account: '123-456-7890',
      amount: 150000,
      datetime: '2022-12-01 12:00'
    },
    {
      type: 'รับเงินเข้า',
      account: '123-456-7890',
      amount: 100000,
      datetime: '2022-12-01 12:00'
    },
    {
      type: 'เงินออก',
      account: '123-456-7890',
      amount: 200,
      datetime: '2022-12-01 12:00'
    },
    {
      type: 'เงินออก',
      account: '123-456-7890',
      amount: 100,
      datetime: '2022-12-01 12:00'
    },
    {
      type: 'รับเงินเข้า',
      account: '123-456-7890',
      amount: 1000,
      datetime: '2022-12-01 12:00'
    },
    {
      type: 'รับเงินเข้า',
      account: '123-456-7890',
      amount: 1000,
      datetime: '2022-12-01 12:00'
    },
    {
      type: 'รับเงินเข้า',
      account: '123-456-7890',
      amount: 1000,
      datetime: '2022-12-01 12:00'
    }
  ];

  return (
    <Layout title="ประวัติการทำรายการ">
      <Nav />
      <section className="flex-grow w-full mt-5 px-5">
        <p className="font-bold text-sm">ประวัติการทำรายการ</p>
        <div className="relative rounded-lg shadow-xl flex flex-col items-center w-full mt-4">
          <div className=" bg-gradient-to-br from-primary to-[#024422] p-10 rounded-md w-full flex items-start">
            <div className="flex flex-col items-center justify-between w-full gap-y-5  text-white">
              <p className="font-bold text-sm">จำนวนเงินคงเหลือ</p>
              <p className="text-3xl font-bold">150,00.49 บาท</p>
              <p className="font-bold text-sm">หมายเลขบัญชี 123-456-7890</p>
            </div>
            <svg className="absolute right-0" width="124" height="142" viewBox="0 0 124 142" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64.0823 -43.4655L225.937 74.6562L0.628193 146.596L64.0823 -43.4655Z" fill="#27D97B" fillOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="mt-8 mb-36 divide-y">
          {
            transactions.map(transaction => {
              return (
                <>
                  <div className="py-2">
                    <h1>{transaction.type}</h1>
                    <p className="text-2xl">{transaction.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} บาท</p>
                    <div className="flex justify-between text-xs">
                      <p>{transaction.type === 'รับเงินเข้า' ? 'จากบัญชี' : 'เข้าบัญชี'} {transaction.account}</p>
                      <p>{transaction.datetime}</p>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>
      <BottomNavigate />
    </Layout>
  );
};

export default Profile;
