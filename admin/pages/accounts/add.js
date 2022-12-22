import AddAccount from "../../components/Accounts/AddAccount";
import Layout from "../../components/Layout";

const Add = () => {
    return (
        <Layout title={'เพิ่มบัญชีใหม่'}>
            <div className="grid gap-4">
                <AddAccount/>
            </div>
        </Layout>
    );
}

export default Add;