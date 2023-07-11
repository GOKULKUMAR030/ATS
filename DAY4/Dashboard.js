import React from "react";
import Navbar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
function DashBoard(){
const user=useSelector(selectUser);
const mail=user.email;
const name=mail.substr(0,mail.indexOf('@'));
return(
    <div class="dash">
    <Navbar/>
    <div id="greeting">
        <p id="msg">
        Welcome Back <span id="name">{name}</span>
        </p>
    </div>
    </div>
)
}
export default DashBoard;