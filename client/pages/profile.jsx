import { Layout, Nav, BottomNavigate } from "../components";
import { useState } from "react";
const Profile = () => {
  const [profile, setProfile] = useState({});
  return (
    <Layout title="โปร์ไฟล์">
      <Nav />
      <section className="flex-grow w-full mt-5 px-5">
        <p className="font-bold text-sm">โปรไฟล์</p>
        <div className="relative rounded-lg shadow-xl flex flex-col items-center w-full mt-4">
          <div className=" bg-gradient-to-br from-primary to-[#024422] p-10 rounded-md w-full flex items-start">
            <div className="flex flex-col items-center justify-between w-full gap-y-5  text-white">
              <p className="font-bold">สวัสดี, คุณพิสิฐไชย</p>
              <p className="font-bold text-sm">ยอดเงินคงเหลือ</p>
              <p className="text-3xl font-bold">150,00.49 บาท</p>
              <p className="font-bold text-sm">บัญชี 123-456-7890</p>
            </div>
            <svg className="absolute right-0" width="124" height="142" viewBox="0 0 124 142" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64.0823 -43.4655L225.937 74.6562L0.628193 146.596L64.0823 -43.4655Z" fill="#27D97B" fillOpacity="0.1" />
            </svg>
          </div>
        </div>
      </section>
      <BottomNavigate />
    </Layout>
  );
};

export default Profile;
