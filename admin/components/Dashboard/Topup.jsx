import { TextField, Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "../Loading";
import Modal from "../Modal";

const Topup = () => {
    const [isLoading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpenModal(true);
        }, 2000)
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shadow rounded p-4 bg-white">
            <h1 className="mb-4 m-0 text-base">เติมเงิน</h1>
            <div className="space-y-4">
                <TextField label="เข้าบัญชีกระเป๋าเงิน" size="small" className="w-full" required defaultValue="" {...register("account")} />
                <TextField label="จำนวนเงิน" size="small" className="w-full" type="number" required defaultValue="" {...register("amount")} />
                <Button variant="contained" type="submit">ทำรายการเติมเงิน</Button>
            </div>

            {isLoading ? <Loading /> : null}
            {
                openModal
                    ? (
                        <Modal title="ทำรายการสำเร็จ">
                            <TableContainer>
                                <Table>
                                    <TableBody>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell>เข้าบัญชีกระเป๋าเงิน</TableCell>
                                            <TableCell align="right">123-456-7890</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell>ยอดเงิน</TableCell>
                                            <TableCell align="right">1,000 บาท</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell>ทำรายการเมื่อ</TableCell>
                                            <TableCell align="right">2022-12-05 12:30</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Modal>
                    )
                    : null
            }
        </form >
    );
}

export default Topup;