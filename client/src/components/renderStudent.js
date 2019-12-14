import React from "react";
import * as moment from 'moment';
import FormButton from './formButton';
import { useHistory } from "react-router";
import studentService from './../services/studentService';

const RenderStudent = (props) => {
    const history = useHistory();

    const handleOnEdit = (id) => history.push("/edit/" + id)

    const handleOnDelete = async (id) => {
        if (window.confirm('Are you sure you wish to delete this record?')) {
            let res = await studentService.delete(id);
            props.getStudents();
        }
    }

    return (
    <tr>
        <td>{props.student.name}</td>
        <td>{moment(props.student.dob).format("YYYY/MM/DD")}</td>
        <td>{props.student.contact_number}</td>
        <td>{props.student.class_name}</td>
        <td>{props.student.teacher_name}</td>
        <td>{props.student.address}</td>
        <td>{props.student.city}</td>
        <td>{props.student.state}</td>
        <td>{props.student.country}</td>
        <td>
        <FormButton
            action={() => handleOnEdit(props.student._id)}
            type='button'
            title='Edit'
            className='btn btn-primary'/>
        &nbsp; | &nbsp;
        <FormButton
            action={() => handleOnDelete(props.student._id)}
            type='button'
            title='Delete'
            className='btn btn-danger'/>
        </td>
    </tr>
    );
};

export default RenderStudent