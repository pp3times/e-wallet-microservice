import Card from "../components/Dashboard/Card";
import Topup from "../components/Dashboard/Topup";
import Layout from "../components/Layout";
import { Auth } from "../components/Auth";
import { useEffect } from "react";

const Index = ({ token }) => {
  useEffect(()=>{
    console.log(token);
  }, []);

  return (
    <Layout title="แดชบอร์ด">
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <Card title={'บัญชีผู้ใช้ในระบบ (บัญชี)'} value={"1,122"} />
          <Card title={'เงินหมุนเวียนในระบบ (บาท)'} value={"54,361.36"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Topup />
        </div>
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