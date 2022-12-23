import { TextField, Button, Divider } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "../Loading";
import SearchIcon from '@mui/icons-material/Search';
import LaunchIcon from '@mui/icons-material/Launch';

const SearchAccount = ({ setAccount }) => {
    const [isLoading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoading(true);
        setTimeout(() => {
            setResult(rows);
            setLoading(false);
        }, 2000)
        console.log(data)
    };

    const rows = [
        {
            id: 100,
            firstName: 'Hello',
            lastName: 'World',
            accountNumber: 'cbc700fc-7fa7-4d61-a156-896bf8085aa5',
        },
        {
            id: 200,
            firstName: 'Jame',
            lastName: 'Ant',
            accountNumber: 'at6700fc-7fa7-4d61-a156-896bf8085aa5',
        }
    ];

    const columns = [
        { field: 'firstName', headerName: 'ขื่อจริง', width: 200 },
        { field: 'lastName', headerName: 'นามสกุล', width: 200 },
        { field: 'accountNumber', headerName: 'เลขบัญชี', width: 200 },
        {
            field: 'id', headerName: 'รายละเอียด', renderCell: (params) => (
                <Button startIcon={<LaunchIcon/>} variant="contained" size="small" onClick={() => {
                    console.log(params.value);
                    setAccount(params.value);
                }}>เปิด</Button>
            )
        }
    ];

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow rounded p-4 bg-white">
                <h1 className="mb-4 m-0 text-base">ค้นหาบัญชี</h1>
                <div className="space-y-4 mb-4">
                    <TextField label="ชื่อจริง" size="small" className="w-full" defaultValue="" {...register("firstName")} />
                    <TextField label="นามสกุล" size="small" className="w-full" defaultValue="" {...register("lastName")} />
                    <TextField label="เลขบัญชี" size="small" className="w-full" defaultValue="" {...register("accountNumber")} />
                    <Button variant="contained" type="submit" startIcon={<SearchIcon/>}>ค้นหา</Button>
                </div>
                {
                    result !== null
                        ? (
                            <>
                                <Divider className="mb-4">ผลการค้นหา</Divider>
                                <div>
                                    <div style={{ height: 300, width: '100%' }}>
                                        <DataGrid rows={result} columns={columns} disableSelectionOnClick />
                                    </div>
                                </div>
                            </>
                        )
                        : null
                }
            </form >

            {isLoading ? <Loading /> : null}
        </>
    );
}

export default SearchAccount;