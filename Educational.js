import React from "react";

export default function Education() {
  const education = [
    { id: 1, name: "National Public School", place: "Bengaluru", stddeg: "10th", grade: "A+" },
    { id: 2, name: "Indian Institute of Science", place: "Bengaluru", stddeg: "under grade", grade: "9.8" }
  ];

  return (
    <table>
      <tbody>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>place</th>
          <th>education</th>
          <th>grade</th>
        </tr>

        {education.map(e => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.place}</td>
            <td>{e.stddeg}</td>
            <td>{e.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}