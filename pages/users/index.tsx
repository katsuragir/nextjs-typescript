import {useRouter} from "next/router";
import Layout from "../../layout";
import Styles from "../../styles/users.module.css";

interface UsersProps {
    dataUsers: Array<any>
}
export default function Users(props: UsersProps) {
    // Data fetching dengan getStaticProps (cocok untuk get data yg tidak dynamis atau tidak berubah ubah)
    const { dataUsers } = props;
    // jika ingin mengunakan router object di dalam sebuah function gunakan useRouter()
    const router = useRouter();
    return (
        <Layout title="Users Page">
            {dataUsers.map((user) => (
                <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={Styles.card}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers
        },
    };    
}