import{ FaPencilAlt ,FaTimes} from 'react-icons/fa'
import Layout from "../../components/Layout";
import {API_URL} from "../../config/index";
import Link from 'next/link';
import Image from 'next/Image'
import styles from '../../styles/Event.module.css'


export default function EventPage(props) {
  const titlename=props.eventLorna.name.split(" ");

  const deleteEvent=() =>{
    console.log("delete event")
  }
  return (

      <Layout title={`${titlename[0]} ${titlename[1]}`}>
       <div className={styles.event}>
         <div className= {styles.controls}>
           <Link href={`events/edit/${props.eventLorna.id}`}>
             <a className={styles.edit}><FaPencilAlt/> Edit Event</a>
             </Link>
             <a className={styles.delete}href="#" onclick={deleteEvent}><FaTimes/> Delete event</a>
         </div>
         <span>
           {props.eventLorna.date} at {props.eventLorna.time}
        </span>
           <h1>{props.eventLorna.name}</h1>
           {props.eventLorna.image &&(
             <div className={styles.image}>
               <Image src={props.eventLorna.image} width={960} height={600}/>
               </div>
           )}
         </div>

         <h3>Performacers</h3>
         <p>{props.eventLorna.performers}</p>
         <h3>Description</h3>
         <p>{props.eventLorna.description}</p>
         <h3>Venue</h3>
         <p>{props.eventLorna.venue}</p>
         
         <Link href="/" >
           <a className={styles.back}> Go back</a>
           </Link>
    </Layout>

  );
}
 export async function getServerSideProps({ query :{slug}}){

 const res=await fetch(`${API_URL}/api/events/${slug}`)
 const events=await res.json();

 return{

  props:{eventLorna:events[0]},
 }
}
 