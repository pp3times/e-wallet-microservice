import { Modal, Box, Typography } from "@mui/material";
import { WalletOutlined, ImportExportOutlined } from "@mui/icons-material";
const AcceptModal = ({ open, setOpen, amount, goal }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      className="flex items-center justify-center"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="relative rounded-lg shadow-xl flex flex-col items-center px-3 bg-white w-full mx-10">
        <p className="font-bold text-center py-5">สรุปการเติมเงิน</p>
        <div className=" bg-gradient-to-br from-primary to-[#024422] px-5 py-3 rounded-md w-full flex items-center">
          <div className="flex flex-col items-center justify-between w-full text-white py-10">
            <p className="font-bold text-xl">จำนวนเงิน</p>
            <p className="text-4xl font-bold py-7">{amount} บาท</p>
            <p className="font-bold text-sm">บัญชีปลายทาง {goal}</p>
            <p className="font-bold text-sm mt-3">โดยผ่านบัตรเคดิต</p>
          </div>
          <svg className="absolute right-0" width="124" height="142" viewBox="0 0 124 142" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.0823 -43.4655L225.937 74.6562L0.628193 146.596L64.0823 -43.4655Z" fill="#27D97B" fillOpacity="0.1" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-full p-5 gap-x-10">
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            ยกเลิก
          </button>
          <button className="bg-primary px-5 py-2 rounded-md text-white">ยืนยัน</button>
        </div>
      </Box>
    </Modal>
  );
};

export default AcceptModal;
