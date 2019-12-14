import React, { useState, useEffect } from "react";
import studentService from './../services/studentService';
import RenderStudent from "./renderStudent";

const ListStudent = () => {
    const [students, setstudents] = useState(null);

    useEffect(() => {
        if(!students) {
            getstudents();
        }
    })

    const getstudents = async () => {
        let res = await studentService.getAll();
        setstudents(res);
    }

    return (
        <div>
            <h3>Student List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>DOB</th>
                        <th>Contact Number</th>
                        <th>Class</th>
                        <th>Teacher Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(students && students.length > 0) ? (
                    students.map(student => <RenderStudent key={student._id} getStudents={getstudents} student={student}></RenderStudent>)
                    ) : (
                    <p>No students found</p>
                    )}
                </tbody>
            </table>
        </div>
    );
  };

  export default ListStudent;