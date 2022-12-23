import { useQRCode } from 'next-qrcode';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

const MyQrCode = () => {
    const { Image } = useQRCode();
    const [qrCodeData, setQrCodeData] = useState('{}');
    const [account, setAccount] = useState({});

    useEffect(()=>{
        const account = getCookie(account);
        console.log(account);
    }, []);

    return (
        <div className="w-full">
            <div className="bg-primary p-4 text-white text-center rounded-t-xl">S-WALLET QR</div>
            <div className="bg-white text-center text-black p-4">
                <Image text={qrCodeData} options={{ type: 'image/jpeg', width: 1200 }} />
                <div className="space-y-1 text-sm">
                    <p className="text-primary font-bold">Scan QR to transfer to account</p>
                    {/* <p>Name: {firstname} {lastname}</p>
                    <p>Wallet Address: {walletAddress}</p>
                    <p className="opacity-50">Ref ID: {refID}</p> */}
                </div>
            </div>
            <div className="flex gap-4 bg-white rounded-b-xl p-4 text-black justify-center items-center border-t-2 border-primary">
                <img src="./logo.svg" className="h-8" alt="" />
                <p className="text-xs">Accepts all banks | รับเงินได้จากทุกบัญชี</p>
            </div>
        </div>
    );
}

export default MyQrCode;