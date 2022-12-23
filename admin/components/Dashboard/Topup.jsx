import { TextField, Button, Alert } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "../Loading";
import Modal from "../Modal";
import * as cookie from "cookies-next";
import axios from "axios";

const Topup = () => {
    const axiosAuth = axios.create({
        headers: {
            Authorization: `Bearer ${cookie.getCookie('token')}`
        }
    });

    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [openCheckModal, setOpenCheckModal] = useState(false);
    const [successModalData, setSuccessModalData] = useState(null);
    const [checkModalData, setCheckModalData] = useState(null);

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        setOpenCheckModal(true);
        setCheckModalData(data);
    };

    const handleTopup = (data) => {
        setError(null);
        setOpenCheckModal(false);
        setLoading(true);
        axiosAuth.post('http://localhost:8280/transaction-api/v1/wallet/fund', data)
            .then(res => {
                if (res.data?.responseCode !== 200) {
                    return setError({message: res.data.responseMessage})
                }
                setSuccessModalData(res.data.data);
                setOpenSuccessModal(true);
                reset();
            })
            .catch(e => {
                setError({message: e.message})
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shadow rounded p-4 bg-white">
            <h1 className="mb-4 m-0 text-base">เติมเงิน</h1>
            {error ? <Alert severity="error" className="mb-6">{error.message}</Alert> : null}
            <div className="space-y-4">
                <TextField label="เข้าเลขบัญชี" size="small" className="w-full" required defaultValue="" {...register("walletAddress")} />
                <TextField label="จำนวนเงิน" size="small" className="w-full" type="number" required defaultValue="" {...register("amount")} />
                <Button variant="contained" type="submit" startIcon={<CreditCardIcon />}>ทำรายการเติมเงิน</Button>
            </div>

            {isLoading ? <Loading /> : null}

            <Modal
                title="ยืนยันการทำรายการเติมเงิน"
                state={openCheckModal}
                setState={setOpenCheckModal}
                action={
                    <Button variant="contained" endIcon={<NavigateNextIcon />} onClick={handleSubmit(handleTopup)}>ยืนยันการทำรายการ</Button>
                }
                closeText="ยกเลิก"
            >
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>เข้าบัญชีกระเป๋าเงิน</TableCell>
                                <TableCell align="right">{checkModalData?.walletAddress}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>จำนวนเงิน</TableCell>
                                <TableCell align="right">{checkModalData?.amount} บาท</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Modal>

            <Modal title="ทำรายการสำเร็จ" state={openSuccessModal} setState={setOpenSuccessModal}>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>เข้าบัญชีกระเป๋าเงิน</TableCell>
                                <TableCell align="right">{successModalData?.walletAddress}</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>จำนวนเงิน</TableCell>
                                <TableCell align="right">{successModalData?.walletBalance} บาท</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>ทำรายการเมื่อ</TableCell>
                                <TableCell align="right">{successModalData?.dateCreated}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Modal>
        </form >
    );
}

export default Topup;