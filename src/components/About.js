import { Outlet } from "react-router-dom";
const About = ()=>{
    return (<div>
        <h1>
            About Us Page
        </h1>
        <p>
            <Outlet/>
        </p>
        <p>
            {""}
            This is Namaste React Live Couse Chapter 
            07 - Finding the Path
        </p>
    </div>)
}

export default About;