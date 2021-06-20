import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import PetForm from './PetForm';

const UpdatePet = (props) => {
    const { id } = props;
    const [ pet, setPet ] = useState({});
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then(res => {
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/pets/" + id, pet)
            .then((res) => {
                console.log(res.data);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate("/pets/" + id);
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }

    return (
        <div>
            <h1>Update a Pet</h1>
            <PetForm pet={ pet } setPet={ setPet } errors={ errors } handleSubmit={ handleSubmit } btnLabel={ "Update Pet Details" }/>
            <p><Link to={"/"} className="form-link">Back to Pets</Link></p>
        </div>
    )
}

export default UpdatePet;