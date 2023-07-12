import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
function MyApplications(){

    return(
        <>
        <NavBar/>
        <div id="greeting">
            <p id="msg">
            Welcome Back <span id="name">MyApplications</span>
            
            </p>
            <Footer/>
        </div>
        </>
    )
    }
    export default MyApplications;