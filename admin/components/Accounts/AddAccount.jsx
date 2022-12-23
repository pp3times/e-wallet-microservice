import { Alert, Button, TextField } from "@mui/material";
import { useState } from "react";
import Loading from "../Loading";
import Modal from "../Modal";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useForm } from "react-hook-form";
import axios from "axios";
import * as cookie from "cookies-next";

const AddAccount = () => {
    const axiosAuth = axios.create({
        headers: {
            Authorization: `Bearer ${cookie.getCookie('token')}`
        }
    });

    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [openCheckModal, setOpenCheckModal] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [successModalData, setSuccessModalData] = useState(null);
    const [checkModalData, setCheckModalData] = useState(null);

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        setOpenCheckModal(true);
        setCheckModalData(data);
    };

    const handleCreateAccount = async (data) => {
        setError(null);
        setOpenCheckModal(false);
        setLoading(true);
        const user = await axiosAuth.post('http://localhost:9191/auth-api/v1/auth/signup', data)
            .then(res => {
                return true;
            })
            .catch(e => {
                setError({ message: e.response?.data?.message ?? e.message })
                setLoading(false);
                return false;
            })

        if (user) {
            axiosAuth.post('http://localhost:8282/account-api/v1/account/create', data)
                .then(res => {
                    if (res.data?.responseCode !== 201) {
                        return setError({message: res.data.responseMessage})
                    }
                    console.log(res.data);
                    setSuccessModalData(res.data.data);
                    setOpenSuccessModal(true);
                    reset();
                })
                .catch(e => {
                    setError({ message: e.response?.data?.message ?? e.message })
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow rounded p-4 bg-white h-fit max-w-xl mx-auto w-full">
                {error ? <Alert severity="error" className="mb-6">{error.message}</Alert> : null}
                <h1 className="text-base m-0 mb-4">เพิ่มบัญชีใหม่</h1>
                <div className="space-y-4 mb-4">
                    <TextField label="ชื่อผู้ใช้งาน" variant="outlined" className="w-full" size="small" required defaultValue="" {...register("username")} />
                    <TextField label="อีเมล" variant="outlined" className="w-full" size="small" type={"email"} required defaultValue="" {...register("email")} />
                    <TextField label="รหัสผ่าน" variant="outlined" className="w-full" size="small" type={"text"} required defaultValue="" {...register("password")} />
                    <TextField label="ชื่อจริง" variant="outlined" className="w-full" size="small" type={"text"} required defaultValue="" {...register("firstName")} />
                    <TextField label="นามสกุล" variant="outlined" className="w-full" size="small" type={"text"} required defaultValue="" {...register("lastName")} />
                    <TextField label="มือถือ" variant="outlined" className="w-full" size="small" type={"phone"} required defaultValue="" {...register("phone")} />
                    <input type="text" defaultValue="" {...register("surname")} hidden />
                </div>
                <Button startIcon={<AddIcon />} variant="contained" type="submit">เพิ่มบัญชี</Button>
            </form>

            {isLoading ? <Loading /> : null}

            <Modal
                title="ยืนยันข้อมูล"
                closeText={'ยกเลิก'}
                state={openCheckModal}
                setState={setOpenCheckModal}
                action={
                    <Button endIcon={<NavigateNextIcon />} onClick={handleSubmit(handleCreateAccount)} variant="contained">ยืนยันการเพิ่มบัญชี</Button>
                }
            >
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>ชื่อบัญชี</TableCell>
                                <TableCell align="right">{checkModalData?.firstName} {checkModalData?.lastName}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>ชื่อผู้ใช้</TableCell>
                                <TableCell align="right">{checkModalData?.username}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>อีเมล</TableCell>
                                <TableCell align="right">{checkModalData?.email}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>มือถือ</TableCell>
                                <TableCell align="right">{checkModalData?.phone}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>รหัสผ่าน</TableCell>
                                <TableCell align="right">{checkModalData?.password}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Modal>

            <Modal
                title="เพิ่มบัญชีสำเร็จ"
                state={openSuccessModal}
                setState={setOpenSuccessModal}
            >
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>ชื่อบัญชี</TableCell>
                                <TableCell align="right">{successModalData?.firstName} {successModalData?.lastName}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>เลขบัญชี</TableCell>
                                <TableCell align="right">{successModalData?.walletAddress}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>อีเมล</TableCell>
                                <TableCell align="right">{successModalData?.email}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>มือถือ</TableCell>
                                <TableCell align="right">{successModalData?.phone}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>ยอดเงินคงเหลือ</TableCell>
                                <TableCell align="right">{successModalData?.walletBalance} บาท</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Modal>
        </>
    );
}

export default AddAccount;