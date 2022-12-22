import SearchAccount from "../components/Accounts/SearchAccount";
import Layout from "../components/Layout"

import { useState } from "react";
import AccountDetails from "../components/Accounts/AccountDetails";
import { Button } from "@mui/material";

const Index = () => {
  const [account, setAccount] = useState(null);

  return (
    <Layout title="บัญชี">
      <div className="mb-4">
        <Button variant="contained">เพิ่มบัญชีใหม่</Button>
      </div>
      <div className={`grid grid-cols-1 gap-4 ${ account !== null ? 'xl:grid-cols-2' : null }`}>
        <SearchAccount setAccount={setAccount} />
        { account !== null ? <AccountDetails account={account} /> : null }
      </div>
    </Layout>
  );
}

export default Index;