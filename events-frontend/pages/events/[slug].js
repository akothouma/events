import Layout from "../../components/Layout";
import {API_URL} from "../../config/index";

export default function EventPage(props) {
  return (
    <div>
      <Layout title="Events Page">
        <h1>{props.eventLorna.name}</h1>
      </Layout>
    </div>
  );
}
 export async function getServerSideProps({ query :{slug}}){

 const res=await fetch(`${API_URL}/api/events/${slug}`)
 const events=await res.json();

 return{

  props:{eventLorna:events[0]},
 }
}
 