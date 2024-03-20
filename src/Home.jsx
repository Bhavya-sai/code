import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav"
function Home()
{
    return(
    <div class="background-image">
        <Nav></Nav>
    <Link to="/login"><button class="login-button">Login</button></Link>
    </div>
    
        
    )
}

export default Home;