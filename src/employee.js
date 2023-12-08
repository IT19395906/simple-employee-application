import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
    const [emdata, setEmdata] = useState([])
    const navigate = useNavigate()

    // const LoadDetails = (id) => {
    //     navigate("/get/" + id);
    // }

    useEffect(() => {
        fetch("http://localhost:4000/employees")
            .then(res => {
                return res.json();
            })
            .then(response => {
                console.log(response);
                setEmdata(response);
            }).catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        if (window.confirm("do you want to delete record?")) {
            fetch("http://localhost:4000/employees/" + id, {
                method: "DELETE"
            })
                .then(res => {
                    alert("deleted successfully");
                    window.location.reload();
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="container">
            <div className="card mt-3">
                <div className="card-title">
                    <h1>Employee List</h1>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-end mb-2">
                        <Link to="/add" className="btn btn-success">Add</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                emdata.map(data => (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>
                                            <Link to={`/get/${data.id}`} className="btn btn-sm btn-success me-2">View</Link>
                                            {/* <a onClick={() => { LoadDetails(data.id) }} className="btn btn-sm btn-success me-2">View</a> 
                                            // we can do the same thing as <Link to={`/get/${data.id}`}> with <a onClick={() => { LoadDetails(data.id) }}>*/}
                                            <Link to={`/update/${data.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                            <button onClick={(e) => handleDelete(data.id)} className="btn btn-sm btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Employee;