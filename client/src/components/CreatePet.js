import React, { useState } from 'react';
import axios from 'axios';
import PetForm from './PetForm';
import { Link, navigate } from '@reach/router';

const CreatePet = (props) => {
    const [ errors, setErrors ] = useState([]);
    const [pet, setPet] = useState({
        petName: "",
        petType: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", pet)
            .then((res) => {
                console.log(res.data)
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate("/")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Link to="/" className="homeLink">back to home</Link>
            <div classNam="header">
                <h1>Pet Shelter</h1>
                <h2>Know a pet needing a home?</h2>
            </div>
                <div>
                    <PetForm pet={ pet } setPet={ setPet } errors={ errors } handleSubmit={ handleSubmit } btnLabel={ "Add pet" }  />
                </div>
        </div>
    )
}

export default CreatePet;