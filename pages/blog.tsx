import Layout from "../layout";
import Style from "../styles/blog.module.css";

interface Post {
    id: number,
    title: string,
    body: string
}

interface BlogProps {
    dataBlog: Post[]
}
export default function Blog(Props: BlogProps) {
    const { dataBlog } = Props;
    return (
        <Layout title="Blog Page">
            {dataBlog.map((blog) => (
                <div key={blog.id} className={Style.card}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                </div>
            ))}            
        </Layout>
    )
}

// getServerSideProps(): cocok untuk data yg dynamis. akan di generate di server secara server side namun static HTML mya belum ada akan di buatkan jika di panggil oleh user
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();
    return {
        props: {
            dataBlog,
        },
    };
}