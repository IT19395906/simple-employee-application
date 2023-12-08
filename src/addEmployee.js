import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AddEmployee = () => {

    // const [valueEm, setValueEm] = useState({
    //     id: '',
    //     name: '',
    //     email: '',
    //     phone: ''
    // }
    // );
    const navigate = useNavigate();
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [active, setActive] = useState(true)
    const [warningmsg, setWarningmsg] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ id, name, email, phone, active });
        fetch("http://localhost:4000/employees", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ name, email, phone, active })
        })
            .then(res => {
                alert("saved successfully");
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container mt-3" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-title mt-4">
                            <h2>Create New Employee</h2>
                        </div>
                        <div className="card-body" style={{ "textAlign": "start" }}>
                            <div className="row">
                                <div className="col-lg-12 mb-2">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input disabled value={id} className="form-control" /> 
                                        { /*value={valueEm.id}*/}
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={name} required onMouseDown={(e) => setWarningmsg(true)} onChange={(e) => setName(e.target.value)} className="form-control" /> 
                                        { /*value={valueEm.name} onChange={(e) => setValueEm(e.target.value)} */}
                                        { name.length === 0 && warningmsg && <span className="text-danger">Enter name</span>} 
                                        {/* name.length == 0 && <span className="text-danger">Enter name</span> 
                                        // custom warning msg for required validation but it will display even in the initial page reload
                                        // to avoid display in intial reload we create warningmsg and onMouseDown*/}
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" className="form-control" /> 
                                        { /*value={valueEm.email} onChange={(e) => setValueEm(e.target.value)}*/}
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)}  type="tel" className="form-control" /> 
                                        { /*value={valueEm.phone} onChange={(e) => setValueEm(e.target.value)}*/}
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-2">
                                    <div className="form-check">
                                        <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} className="form-check-input" />
                                        <label className="form-check-label">Is Active</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-outline-success">Submit</button>
                                        <Link to="/" className="btn btn-outline-info ms-3">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddEmployee;