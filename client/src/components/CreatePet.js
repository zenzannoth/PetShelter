import React, { useState } from 'react';
import axios from 'axios';
import PetForm from './PetForm';
import { navigate } from '@reach/router';

const CreatePet = (props) => {
    const [ errors, setErrors ] = useState({});
    const [pet, setPet] = useState({
        petName: "",
        petSex: ""
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
            <h1>Create a New Pet</h1>
            <PetForm pet={ pet } setPet={ setPet } errors={ errors } handleSubmit={ handleSubmit } btnLabel={ "Create New Pet" }  />
        </div>
    )
}

export default CreatePet;