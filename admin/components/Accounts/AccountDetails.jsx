import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Loading from "../Loading";

import Modal from "../Modal";
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AccountDetails = ({ account, setAccount }) => {
    const [isLoading, setLoading] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleDelete = () => {
        setOpenDeleteModal(false);
        setLoading(true);

        setTimeout(() => {
            setAccount(null);
            setLoading(false);
        }, 2000);

        console.log("Delete!");
    }

    const handleEdit = () => {
        console.log("Edit!");
    }

    return (
        <>
            <div className="shadow rounded p-4 bg-white h-fit">
                <div className="flex flex-col md:flex-row items-start justify-between mb-4 gap-2">
                    <h1 className="m-0 text-base">
                        รายละเอียดบัญชีของ<br />
                        <span className="text-2xl">Thanawat Chuensooksri</span>
                    </h1>
                    <div className='flex gap-2'>
                        <Button startIcon={<DeleteIcon />} size="small" color="error" onClick={() => setOpenDeleteModal(true)}>ลบบัญชี</Button>
                        <Button startIcon={<EditIcon />} size="small" color="neutral" onClick={handleEdit}>แก้ไขข้อมูล</Button>
                    </div>
                </div>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>ชื่อบัญชี</TableCell>
                                <TableCell align="right">Thanawat Chuensooksri</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>เลขบัญชี</TableCell>
                                <TableCell align="right">cbc700fc-7fa7-4d61-a156-896bf8085aa5</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>จำนวนเงินคงเหลือ</TableCell>
                                <TableCell align="right">1,000 บาท</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <Modal
                title="ยืนยันการลบบัญชี"
                state={openDeleteModal}
                setState={setOpenDeleteModal}
                action={
                    <Button startIcon={<DeleteIcon />} color="error" variant="contained" onClick={handleDelete}>ยืนยันการลบบัญชี</Button>
                }
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
                                <TableCell align="right">cbc700fc-7fa7-4d61-a156-896bf8085aa5</TableCell>
                            </TableRow>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>จำนวนเงินคงเหลือ</TableCell>
                                <TableCell align="right">1,000 บาท</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Modal>

            {isLoading ? <Loading /> : null}
        </>
    );
}

export default AccountDetails;