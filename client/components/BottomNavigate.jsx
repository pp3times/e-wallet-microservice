import { QrCodeScanner, HomeOutlined, WalletOutlined, Person2Outlined, GridViewOutlined } from "@mui/icons-material";
import Link from "next/link";

const BottomNavigate = () => {
  return (
    <footer className="fixed bottom-0 min-w-[390px] flex items-center justify-center h-20">
      <div className="mx-auto bg-white rounded-3xl absolute -top-14 h-24 w-24 flex items-center justify-center z-10">
        <button className="bg-primary w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white">
          <QrCodeScanner className="text-4xl" />
          แสกน
        </button>
      </div>
      <div className=" bg-primary h-20 min-w-[147px] absolute left-0 rounded-tr-2xl flex justify-center gap-x-10 items-center z-10 text-white">
        <Link href="" className="flex flex-col items-center">
          <HomeOutlined className="text-3xl" />
          <p className="text-sm">หน้าหลัก</p>
        </Link>
        <Link href="" className="flex flex-col items-center">
          <WalletOutlined className="text-3xl" />
          <p className="text-sm">บัญชี</p>
        </Link>
      </div>
      <div className=" bg-primary h-16 min-w-[121px] absolute bottom-0 z-0"></div>

      <div className=" bg-primary h-20 min-w-[147px] absolute right-0 rounded-tl-2xl flex justify-center gap-x-10 items-center z-10 text-white">
        <Link href="" className="flex flex-col items-center">
          <GridViewOutlined className="text-3xl" />
          <p className="text-sm">บริการ</p>
        </Link>
        <Link href="" className="flex flex-col items-center">
          <Person2Outlined className="text-3xl" />
          <p className="text-sm">โปรไฟล์</p>
        </Link>
      </div>
    </footer>
  );
};

export default BottomNavigate;

{
  /* <svg className="w-full" viewBox="0 0 393 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 42H137C148.046 42 157 50.9543 157 62V110H0V42Z" fill="#20B367" />
        <path d="M236 62C236 50.9543 244.954 42 256 42H393V110H236V62Z" fill="#20B367" />
        <rect x="157" y="61" width="79" height="49" fill="#20B367" />
        <rect x="157" width="79" height="80" rx="20" fill="#FAFAFB" />
        <rect x="161" y="5" width="71" height="71" rx="20" fill="#20B367" fill-opacity="0.16" />
        <rect x="162" y="5" width="69" height="70" rx="20" fill="url(#paint0_linear_0_1)" />
        <defs>
          <linearGradient id="paint0_linear_0_1" x1="81" y1="-48.5" x2="224" y2="68.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#20B367" />
          </linearGradient>
        </defs>
      </svg> */
}
