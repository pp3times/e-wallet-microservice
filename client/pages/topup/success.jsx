import { Layout } from "../../components";
import { ArrowBackIos, CheckCircleOutline } from "@mui/icons-material";
import Link from "next/link";
const Success = () => {
  return (
    <Layout title="สำเร็จ">
      <div className="bg-primary h-screen w-full pt-5 text-white flex flex-col">
        <div className="bg-white rounded-t-xl flex-grow py-10 h-full w-full mt-10 px-5 pt-4 text-black flex flex-col justify-between">
          <p className="font-bold text-sm">สรุปการเติมเงิน</p>
          <div className=" bg-gradient-to-br from-primary to-[#024422] px-5 py-5 rounded-md w-full flex items-center">
            <div className="flex flex-col items-center justify-between w-full text-white gap-y-10">
              <CheckCircleOutline className="text-7xl" />
              <p className="font-bold text-sm underline">เสร็จสิ้นดำเนินการเติมเงิน</p>
              <p className="text-4xl font-bold">630,400.69 บาท</p>
              <p className="font-bold text-sm">บัญชีปลายทาง 123-456-7890</p>
              <p className="font-bold text-sm">โดยผ่านบัตรเคดิต</p>
            </div>
            <svg className="absolute right-0" width="124" height="142" viewBox="0 0 124 142" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64.0823 -43.4655L225.937 74.6562L0.628193 146.596L64.0823 -43.4655Z" fill="#27D97B" fillOpacity="0.1" />
            </svg>
          </div>

          <div className="w-full flex justify-end px-5">
            <button>ยืนยัน</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
