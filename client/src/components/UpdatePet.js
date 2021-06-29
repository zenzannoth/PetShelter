import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import PetForm from './PetForm';
// import DeletePet from './DeletePet'; // old delete button

const UpdatePet = (props) => {
    const { id } = props;
    const [ pet, setPet ] = useState({});
    const [ errors, setErrors ] = useState([]);

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
        axios.put("http://localhost:8000/api/pets/" + id + "/edit", pet)
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

        // old delete
        // const postDelete = () => {
        //     navigate("/");
        // }

    return (
        <div>
            <Link to="/" className="homeLink">back to home</Link>
            <div classNam="header">
                <h1>Pet Shelter</h1>
                <h2>Know a pet needing a home?</h2>
            </div>
            <PetForm pet={ pet } setPet={ setPet } errors={ errors } handleSubmit={ handleSubmit } btnLabel={ "✏ Edit Pet" }/>
        </div>
    )
}

export default UpdatePet;