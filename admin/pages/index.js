import Card from "../components/Dashboard/Card";
import Topup from "../components/Dashboard/Topup";
import Layout from "../components/Layout"

const Index = () => {
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

export default Index;