import Layout from "../../layout";

interface User {
    id: number;
    name: string,
    email: string,
    phone: string,
    website: string
}

interface UserDetailProps {
    user: User
}
export default function Userdetail(props: UserDetailProps) {
    const { user } = props;
    return (
        <Layout title="Users Detail Page">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Layout>
    )
}
// Data feching getStaticPaths(): akan mengenerate halaman2 static html sejumlah data user yg di miliki (static generate saat next js di build)
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    const paths = dataUsers.map((user: User) => ({
        params: {
            id: `${user.id}`
        },
    }));
    return {
        paths,
        fallback: false // jika true akan terjadi error saat di build di mana error nya itu karna kita akan selalu memprovide / menyuruh si rendering ini sampai selesai jika ada url yg tidak di temukan dan jika false maka bila ada url yg tidak di temukan maka dia akan di larikan ke 404 page yg mana lebih aman
    }
}

interface GetStaticProps {
    params: {
        id: string
    }
}
// Data feching getStaticProps(): maka seluruh halaman nya sudah di siapkan sebelum di panggil oleh user kedalam browser mereka (static generate saat next js di build)
export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
}