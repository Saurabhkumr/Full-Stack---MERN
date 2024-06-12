import React from "react";

function Student() {
  const stud = [
    { id: 1, name: "saurabh", course: "bsc" },
    { id: 2, name: "saurabh", course: "bsc" },
    { id: 3, name: "saurabh", course: "bsc" },
  ];
  return (
    <>
      <tr>
        <th>sno. </th>
        <th>name </th>
        <th>course </th>
      </tr>

      {stud.map((student, index) => (
        <tr key={student.id}>
          <td>{index + 1}</td>
          <td>{student.name}</td>
          <td>{student.course}</td>
        </tr>
      ))}
    </>
  );
}

export default Student;
