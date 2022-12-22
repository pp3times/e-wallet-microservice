import { TextField, Button, Divider } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "../Loading";

const SearchAccount = ({ setAccount }) => {
    const [isLoading, setLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        console.log(data)
    };

    const rows = [
        {
            id: 100,
            firstName: 'Hello',
            lastName: 'World',
        }
    ];

    const columns = [
        { field: 'firstName', headerName: 'ขื่อจริง', width: 150 },
        { field: 'lastName', headerName: 'นามสกุล', width: 150 },
        {
            field: 'id', headerName: 'รายละเอียด', renderCell: (params) => (
                    <Button variant="contained" size="small" onClick={()=>{
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
                    <Button variant="contained" type="submit">ค้นหา</Button>
                </div>
                <Divider className="mb-4">ผการค้นหา</Divider>
                <div>
                    <div style={{ height: 300, width: '100%' }}>
                        <DataGrid rows={rows} columns={columns} disableSelectionOnClick />
                    </div>
                </div>
            </form >

            {isLoading ? <Loading /> : null}
        </>
    );
}

export default SearchAccount;