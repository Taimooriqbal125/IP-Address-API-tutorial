import React from "react";
import Data from "../../data/Data";
import Button from "../button/Button";

const Table = () => {
  return (
    <div>
      <table style={{ width: 400 }}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Position</th>
        </tr>

        {Data.map((item) => {
          return (
            <tr key={item}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.position}</td>
              <td><Button>submit</Button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
