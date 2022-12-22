import { WalletOutlined, ImportExportOutlined } from "@mui/icons-material";
import Link from "next/link";
const CardWallet = () => {
  return (
    <div className="relative rounded-lg shadow-xl flex flex-col items-center mx-3">
      <div className=" bg-gradient-to-br from-primary to-[#024422] px-5 py-3 rounded-md w-full flex items-center">
        <div className="flex flex-col items-start justify-between w-full gap-y-5  text-white">
          <p className="font-bold text-xs">จำนวนเงินคงเหลือ</p>
          <p className="text-3xl font-bold">150,00.49 บาท</p>
          <p className="font-bold text-sm">บัญชี 123-456-7890</p>
        </div>
        <img src="./logo.svg" alt="" />
        <svg className="absolute right-0" width="124" height="142" viewBox="0 0 124 142" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64.0823 -43.4655L225.937 74.6562L0.628193 146.596L64.0823 -43.4655Z" fill="#27D97B" fillOpacity="0.1" />
        </svg>
      </div>
      <div className="flex items-center justify-between w-full p-5 gap-x-10">
        <Link href="/exchange" className="flex items-center justify-center bg-primary/20 text-primary gap-x-2 py-2 w-2/4 rounded-md duration-300 hover:scale-90">
          <WalletOutlined />
          <p className="text-black font-bold">เติมเงิน</p>
        </Link>
        <Link href="/topup" className="flex items-center justify-center bg-primary/20 text-primary gap-x-2 py-2 w-2/4 rounded-md duration-300 hover:scale-90">
          <ImportExportOutlined />
          <p className="text-black font-bold">โอนเงิน</p>
        </Link>
      </div>
    </div>
  );
};

export default CardWallet;
