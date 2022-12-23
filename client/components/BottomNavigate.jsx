import { QrCodeScanner, HomeOutlined, WalletOutlined, Person2Outlined, GridViewOutlined } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BottomNavigate = () => {
  const router = useRouter();
  const [status, setStatus] = useState({
    "/": false,
    "/transaction": false,
    "/service": false,
    "/profile": false,
  });
  useEffect(() => {
    setStatus({ ...status, [router.pathname]: !status[router.pathname] });
  }, []);
  return (
    <footer className="fixed bottom-0 min-w-[390px] flex items-center justify-center h-20">
      <div className="mx-auto bg-white rounded-3xl absolute -top-14 h-24 w-24 flex items-center justify-center z-10">
        <Link href="/qrcode" className="bg-primary w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white">
          <QrCodeScanner className="text-4xl" />
          แสกน
        </Link>
      </div>
      <div className=" bg-primary h-20 min-w-[147px] absolute left-0 rounded-tr-2xl flex justify-center gap-x-10 items-center z-10 text-white">
        <Link href="/" className="flex flex-col items-center ">
          <HomeOutlined className={"text-3xl duration-300 " + (status["/"] && "rounded-full bg-white/20 w-10 h-10")} />
          <p className="text-sm">หน้าหลัก</p>
        </Link>
        <Link href="/transaction" className="flex flex-col items-center ">
          <WalletOutlined className={"text-3xl duration-300 " + (status["/transaction"] && "rounded-full bg-white/20 w-10 h-10")} />
          <p className="text-sm">บัญชี</p>
        </Link>
      </div>
      <div className=" bg-primary h-16 min-w-[121px] absolute bottom-0 z-0"></div>

      <div className=" bg-primary h-20 min-w-[147px] absolute right-0 rounded-tl-2xl flex justify-center gap-x-10 items-center z-10 text-white">
        <Link href="/service" className="flex flex-col items-center ">
          <GridViewOutlined className={"text-3xl duration-300 " + (status["/service"] && "rounded-full bg-white/20 w-10 h-10")} />
          <p className="text-sm">บริการ</p>
        </Link>
        <Link href="/profile" className="flex flex-col items-center ">
          <Person2Outlined className={"text-3xl duration-300 " + (status["/profile"] && "rounded-full bg-white/20 w-10 h-10")} />
          <p className="text-sm">โปรไฟล์</p>
        </Link>
      </div>
    </footer>
  );
};

export default BottomNavigate;
