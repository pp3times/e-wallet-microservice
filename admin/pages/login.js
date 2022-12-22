import Head from "next/head";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        window.location.replace('/');
    }

    return (
        <>
            <Head>
                <title>เข้าสู่ระบบ - ระบบจัดการ S-WALLET</title>
            </Head>
            <div className="min-h-full flex items-center justify-center">
                <div className="p-4 max-w-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 shadow rounded h-fit">
                        <h1 className="m-0 text-base mb-4">เข้าสู่ระบบ</h1>
                        <div className="space-y-4">
                            <TextField defaultValue="" {...register("username")} required label="ชื่อผู้ใช้" variant="outlined" size="small" className="w-full" />
                            <TextField defaultValue="" {...register("password")} required label="รหัสผ่าน" variant="outlined" size="small" className="w-full" type={'password'} />
                            <Button startIcon={<LoginIcon/>} variant="contained" type="submit">เข้าสู่ระบบ</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;