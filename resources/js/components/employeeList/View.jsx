import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const View = () => {
   let params = useParams();
   let id = params.id;
   
   const [userInput,setInput] = useState({
      name : '',
      email : '',
      mobile : '',
      salary : '',
   });

   useEffect(() => {
      fetch("/fetch_single_employee?user_id="+id).then((response) => {
         return response.json();
       })
       .then((data) => {
         setInput(data.data);
       });
   },[]);

   // console.log(userInput);

    return (
        <div className="card">
            <div className="card-header">Employee deatils</div>
            <div clasName="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Column</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{userInput.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{userInput.email}</td>
                        </tr>
                        <tr>
                            <th>Contact</th>
                            <td>{userInput.mobile}</td>
                        </tr>
                        <tr>
                            <th>Salary</th>
                            <td>{userInput.salary}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/home" className="btn btn-primary">
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default View;
