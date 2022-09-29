import React, { useState, useEffect } from "react";
import Row from "./Row";

const Table = () => {
    const [item, setData] = useState("");
    useEffect(() => {
        fetch("http://127.0.0.1:8000/fetch_employee_list")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData({ res: data.data });
            });
    }, []);
    let output = item.res;
    // console.log(output);

    return (
        <table className="table table-hover table-bordered" id="employeeTable">
            <thead>
                <tr>
                    <th scope="col" width="10%">
                        #
                    </th>
                    <th scope="col" width="18%">
                        Name
                    </th>
                    <th scope="col" width="18%">
                        Mobile
                    </th>
                    <th scope="col" width="18%">
                        Email
                    </th>
                    <th scope="col" width="18%">
                        Salary
                    </th>
                    <th scope="col" width="18%">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {output?.map((val, key) => (
                    <Row index={key+1} item={val}/>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
