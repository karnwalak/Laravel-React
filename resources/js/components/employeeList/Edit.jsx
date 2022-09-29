import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Edit = () => {
    let params = useParams();
    let ids = params.id;
    const [errorList, setError] = useState("");
    const [successMsg, setMessage] = useState("");
    const [userInput, setInput] = useState({
        name: "",
        email: "",
        mobile: "",
        salary: "",
    });

    useEffect(() => {
        fetch("/fetch_single_employee?user_id=" + ids)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setInput(data.data);
            });
    }, []);
    console.log(userInput);
    const { id, name, email, mobile, salary } = userInput;

    const handleInput = (e) => {
      setInput({ ...userInput, [e.target.name]: e.target.value });
    };

    const submitData = (event) => {
        event.preventDefault();
        const url = "http://127.0.0.1:8000/edit_employee";
      //   console.log(userInput);
        axios.post(url, userInput).then((res) => {
         // console.log(res);
            if (res.data.status === true) {
                setError([]);
                setMessage(res.data.message);
                window.location.href = "/home";
            } else {
                // console.log(res.data.errors)
                setError(res.data.error);
            }
        });
    };

    return (
        <div className="card">
            <div className="card-header">
                <h2 className="text-primary">Edit Employee</h2>
                <span className="text-success">{successMsg}</span>
            </div>
            <div clasName="card-body">
                <form onSubmit={submitData}>
                    <div className="row justify-content-center">
                        <div className="form-group col-md-10 col-sm-10 my-3">
                            <label htmlFor="name">Name</label>
                            <input type="hidden" value={id} name="id" />
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                onChange={handleInput}
                                value={name}
                            />
                            <span className="text-danger">
                                {errorList.name}
                            </span>
                        </div>
                        <div className="form-group col-md-10 col-sm-10 my-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                onChange={handleInput}
                                value={email}
                            />
                            <span className="text-danger">
                                {errorList.email}
                            </span>
                        </div>
                        <div className="form-group col-md-10 col-sm-10 my-3">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                type="text"
                                name="mobile"
                                className="form-control"
                                onChange={handleInput}
                                value={mobile}
                            />
                            <span className="text-danger">
                                {errorList.mobile}
                            </span>
                        </div>
                        <div className="form-group col-md-10 col-sm-10 my-3">
                            <label htmlFor="salary">Salary</label>
                            <input
                                type="text"
                                name="salary"
                                className="form-control"
                                onChange={handleInput}
                                value={salary}
                            />
                            <span className="text-danger">
                                {errorList.salary}
                            </span>
                        </div>
                        <div className="form-group col-md-10 col-sm-10 my-3">
                            <Link to="/home" className="btn btn-primary">
                                Go Back
                            </Link>
                            <button
                                type="submit"
                                className="btn btn-success mx-3"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Edit;
