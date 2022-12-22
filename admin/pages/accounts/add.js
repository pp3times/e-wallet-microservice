import AddAccount from "../../components/Accounts/AddAccount";
import Layout from "../../components/Layout";
import { Auth } from "../../components/Auth";

const Add = ({ token }) => {
    return (
        <Layout title={'เพิ่มบัญชีใหม่'}>
            <div className="grid gap-4">
                <AddAccount />
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

export default Add;