import Link from "next/link";
import Layout from "../Components/Layout";

export default function AboutPage(){
    return(
        <Layout>
            <h1>Home Page</h1>
            <Link href="/about">About</Link>
        </Layout>
    );

}
