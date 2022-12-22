import { Button, TextField } from "@mui/material";
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

const AddAccount = () => {
    const [isLoading, setLoading] = useState(false);
    const [openCheckModal, setOpenCheckModal] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

    const handleSubmit = () => {
        setOpenCheckModal(false);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpenSuccessModal(true);
            console.log('Submit!');
        }, 2000);
    }

    return (
        <>
            <form className="shadow rounded p-4 bg-white h-fit max-w-xl mx-auto w-full">
                <h1 className="text-base m-0 mb-4">เพิ่มบัญชีใหม่</h1>
                <div className="space-y-4 mb-4">
                    <TextField label="ชื่อจริง" variant="outlined" className="w-full" size="small" required />
                    <TextField label="นามสกุล" variant="outlined" className="w-full" size="small" required />
                </div>
                <Button startIcon={<AddIcon/>} variant="contained" type="button" onClick={() => setOpenCheckModal(true)}>เพิ่มบัญชี</Button>
            </form>

            {isLoading ? <Loading /> : null}

            <Modal
                title="ยืนยันข้อมูล"
                closeText={'ยกเลิก'}
                state={openCheckModal}
                setState={setOpenCheckModal}
                action={
                    <Button endIcon={<NavigateNextIcon/>} onClick={() => handleSubmit()} variant="contained">ยืนยันการเพิ่มบัญชี</Button>
                }
            >
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>ชื่อบัญชี</TableCell>
                                <TableCell align="right">Thanawat Chuensooksri</TableCell>
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
                                <TableCell align="right">Thanawat Chuensooksri</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>เลขบัญชี</TableCell>
                                <TableCell align="right">123-456-7890</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>ยอดเงินคงเหลือ</TableCell>
                                <TableCell align="right">0 บาท</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Modal>
        </>
    );
}

export default AddAccount;