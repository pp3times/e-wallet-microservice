import SearchAccount from "../../components/Accounts/SearchAccount";
import Layout from "../../components/Layout";

import { useState } from "react";
import AccountDetails from "../../components/Accounts/AccountDetails";
import { Button } from "@mui/material";
import Link from "next/link";

const Index = () => {
  const [account, setAccount] = useState(null);

  return (
    <Layout title="บัญชี">
      <div className="mb-4">
        <Link href={'/accounts/add'} className="no-underline"><Button variant="contained">เพิ่มบัญชีใหม่</Button></Link>
      </div>
      <div className={`grid grid-cols-1 gap-4 ${ account !== null ? 'xl:grid-cols-2' : null }`}>
        <SearchAccount setAccount={setAccount} />
        { account !== null ? <AccountDetails account={account} setAccount={setAccount} /> : null }
      </div>
    </Layout>
  );
}

export default Index;