import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const GetEmployee = () => {

    const [data, setData] = useState({})
    const { employeeid } = useParams();
    useEffect(() => {
        fetch("http://localhost:4000/employees/" + employeeid)
            .then(res => {
                return res.json();
            })
            .then(response => {
                console.log(response);
                setData(response);
            }).catch(err => console.log(err))
    }, [employeeid])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title mt-4">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body" style={{ "textAlign": "start" }}>
                    <h3>Employee name: {data.name}</h3>
                    <h5>Employee email: {data.email}</h5>
                    <h5>Employee phone: {data.phone}</h5>
                    <Link to="/" className="btn btn-primary">Back</Link>
                </div>
            </div>
        </div>
    );
}
export default GetEmployee;