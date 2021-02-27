import { React } from "react";

const Timeline = ({ form }) => {
    return (
        <div className="card m-5">
        <div className="card-body">
            <h5 className="card-username">{form.username}</h5>
            <p className="card-text">{form.message}</p>
            </div>    
        </div>
    )
}

export default Timeline