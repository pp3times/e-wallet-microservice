import { Layout, Nav, BottomNavigate } from "../components";
import { useState } from "react";
const Service = () => {
  return (
    <Layout title="โปร์ไฟล์">
      <Nav />
      <section className="flex-grow w-full mt-5 px-5 max-h-screen">
        <p className="font-bold text-sm">บริการ</p>
        <div className=" flex-grow flex items-center justify-center h-96 font-bold">พบบริการเร็ว ๆนี้</div>
      </section>
      <BottomNavigate />
    </Layout>
  );
};

export default Service;
