import SearchAccount from "../../components/Accounts/SearchAccount";
import Layout from "../../components/Layout";
import { Auth } from "../../components/Auth";

import { useState } from "react";
import AccountDetails from "../../components/Accounts/AccountDetails";
import { Button } from "@mui/material";
import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';

const Index = ({ token }) => {
  const [account, setAccount] = useState(null);

  return (
    <Layout title="บัญชี">
      <div className="mb-4">
        <Link href={'/accounts/add'} className="no-underline"><Button startIcon={<AddIcon />} variant="contained">เพิ่มบัญชีใหม่</Button></Link>
      </div>
      <div className={`grid grid-cols-1 gap-4 ${account !== null ? 'xl:grid-cols-2' : null}`}>
        <SearchAccount setAccount={setAccount} />
        {account !== null ? <AccountDetails account={account} setAccount={setAccount} /> : null}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  if (!Auth(req.cookies?.token)) {
    res.setHeader("Set-Cookie", `token=; Max-Age=0`);
    return {
      redirect: { destination: '/login', permanent: false },
    }
  }

  const token = req.cookies.token;

  return {
    props: { token }
  }
}

export default Index;