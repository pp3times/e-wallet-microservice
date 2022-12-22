import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const AccountDetails = ({ account }) => {
    return (
        <div className="shadow rounded p-4 bg-white h-fit">
            <h1 className="mb-4 m-0 text-base">
                รายละเอียดบัญชีของ<br />
                <span className="text-2xl">Thanawat Chuensooksri</span>
            </h1>
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
                            <TableCell>จำนวนเงินคงเหลือ</TableCell>
                            <TableCell align="right">1,000 บาท</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default AccountDetails;