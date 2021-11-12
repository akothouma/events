import Link from "next/link";
import Layout from "../Components/Layout";
import {API_URL} from "../config/index";

export default function AboutPage(props){
    console.log(props.events);
    return(
        <Layout>
            <h1>Home Page</h1>
            {props.events.map((event) => {
                return <h3>{event.name}</h3>
            })}
            <Link href="/about">About</Link>
        </Layout>
    );

}
export async function getStaticProps(){
    const res=await fetch(`${API_URL}/api/events`);
    const events=await res.json();
    return{
        props:{events},
    };
}