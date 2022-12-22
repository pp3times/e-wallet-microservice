import SearchAccount from "../components/Accounts/SearchAccount";
import Layout from "../components/Layout"

import {useState} from "react";

const Index = () => {
  const [account, setAccount] = useState(null);

  return (
    <Layout title="บัญชีผู้ใช้งาน">
      <div className="grid gap-4">
        <div className="max-w-xl mx-auto">
          <SearchAccount setAccount={setAccount} />
        </div>
      </div>
    </Layout>
  );
}

export default Index;