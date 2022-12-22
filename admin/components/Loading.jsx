import { Backdrop } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';

import {useState} from "react";

const Loading = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default Loading;