import Navbar from "./Navbar";
import "../styles/App.css"

export default function ErrorPage(){
    return(
        <div className="error-page page">
            <Navbar />
            <div>Error 404, page cannot be found</div>
        </div>
    )
}