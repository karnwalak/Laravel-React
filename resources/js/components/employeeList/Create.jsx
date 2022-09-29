
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Create = () => {
    const [errorList, setError] = useState("");
    const [successMsg, setMessage] = useState("");
    const [userInput, setInput] = useState({
        name: "",
        email: "",
        mobile: "",
        salary: "",
    });


    const handleInput = (e) => {
      setInput({ ...userInput, [e.target.name]: e.target.value });
    };

    const submitData = (event) => {
        event.preventDefault();
        const url = "http://127.0.0.1:8000/add_employee";
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
                <h2 className="text-primary">Add Employee</h2>
                <span className="text-success">{successMsg}</span>
            </div>
            <div clasName="card-body">
                <form onSubmit={submitData}>
                    <div className="row justify-content-center">
                        <div className="form-group col-md-10 col-sm-10 my-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                onChange={handleInput}
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
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Create;
