import Link from "next/link";
import React from "react";

export default function aboutPage(){
    return(
        <div>
            <h1>About Page</h1>
            <p>This is an app to find Lorna at an event</p>
            <Link href= "/ " >Home</Link>
        </div>
    );
}