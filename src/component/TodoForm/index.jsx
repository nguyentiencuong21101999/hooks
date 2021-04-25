import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    add:PropTypes.func
};
TodoForm.defaultProps ={
    add:null
}
function TodoForm(props) {
    const [inputValues, setInputValues] = useState({
        id:"",
        title:""
    });
    const getValue = (event) => {
        const { name, value } = event.target;
        setInputValues(
            {...inputValues,
            [name]: value }
        );

    }
    const getValueForm = () => {
        const {add} = props;
        if(add){
            add(inputValues);
        }

    }
    return (
        <div className="container-fluid wrapper">
            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">ID : </label>
                        <input onChange={getValue} name="id" id="id" type="text" className="form-control" placeholder="Enter ID" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Title : </label>
                        <input  onChange={getValue} name="title" type="password" className="form-control" id="exampleInputPassword1" placeholder="title" />
                    </div>
                    <button onClick={(event) => { getValueForm(event) }} type="submit" className="btn btn-primary">Submit</button>
                </div>

            </div>
        </div>
    );
}

export default TodoForm;