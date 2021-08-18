import Link from "next/link";
import Layout from "../components/layout";

export default function Custom404() {
    return (
        <Layout>
            <p>Page not found! Return to <Link href={"/"}><a>home</a></Link>.</p>
        </Layout>
    );
}