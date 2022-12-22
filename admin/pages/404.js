import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";

const Custom404 = () => {
    return (
        <div className="min-h-full flex items-center justify-center">
            <div className="p-4 text-center">
                <div className="mb-4">
                    <h1 className="m-0">404</h1>
                    <p className="m-0">ไม่พบหน้าที่คุณต้องการหรือไม่มีสิทธิ์เข้าถึงหน้าดังกล่าว</p>
                </div>
                <Link href={'/'} className="no-underline">
                    <Button startIcon={<ArrowBackIcon />}>กลับหน้าแรก</Button>
                </Link>
            </div>
        </div>
    );
}

export default Custom404;