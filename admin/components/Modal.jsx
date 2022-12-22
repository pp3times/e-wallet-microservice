import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useState } from "react";

const Modal = ({ title, children, action=null, closeText=null, state=false, setState }) => {

    const handleClickOpen = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    return (
        <>
            <Dialog
                open={state}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={'sm'}
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{closeText ?? 'ปิดหน้าต่าง'}</Button>
                    {action}
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Modal;