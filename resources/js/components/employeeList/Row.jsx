import React from "react";
import TableActionButton from "./TableActionButton";

const Row = (props) => {
    return (
        <tr>
            <th scope="row">#{props.index}</th>
            <td>{props.item.name}</td>
            <td>{props.item.mobile}</td>
            <td>{props.item.email}</td>
            <td>{props.item.salary}</td>
            <td className="d-flex">
                <TableActionButton eachRowId={props.item.id} />
            </td>
        </tr>
    );
};

export default Row;
