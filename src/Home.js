import {React} from "react";
import { Link } from "react-router-dom";

const Home=()=>{
return(
    <main className="home-container"  >
        <h1>Githab Battle: Battle your friends and ..stuff</h1>
        <Link to="battle" className="button">Battle</Link>
    </main>
)}
export default Home;