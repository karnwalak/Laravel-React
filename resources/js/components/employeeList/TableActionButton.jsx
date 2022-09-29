import React, { useState } from "react";
import { Link } from "react-router-dom";
const TableActionButton = (props) => {
    const deleteEmployee = (ids) => {
        const url = "http://127.0.0.1:8000/delete_employee?id="+ids;
        //   console.log(userInput);
          axios.get(url).then((res) => {
           // console.log(res);
              if (res.data.status === true) {
                  window.location.href = "/home";
              } 
            //   else {
            //   }
          });
    }
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <Link to={`/view/${props.eachRowId}`} type="button" className="btn btn-primary">
                View
            </Link>
            <Link to={`/edit/${props.eachRowId}`} type="button" className="btn btn-info">
                Update
            </Link>
            <button type="button" className="btn btn-danger" onClick={()=>{deleteEmployee(props.eachRowId)}}>
                Delete
            </button>
        </div>
    );
};

export default TableActionButton;
