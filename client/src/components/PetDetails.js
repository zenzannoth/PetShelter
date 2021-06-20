import '../App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const PetDetails = (props) => {
    const [pet, setPet] = useState({});
    useEffect (() => {
        axios.get("http://localhost:8000/api/pets/" + props.id)
            
            .then(res => setPet({
                ...res.data
            }))
    }, [props.id])

    
    const deletePet = (petId) => {
        axios.delete("http://localhost:8000/api/pets/" + petId)
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1 style={{textDecoration: "none"}}>Name: {pet.petName}</h1>
            <p>Type: {pet.petType}</p>
            <p>Sex: {pet.petSex}</p>
            <p>Description: {pet.description}</p>
            <p><Link className="form-link" to={"/pets/update/" + pet._id }> Edit</Link></p>
            <p><button onClick={(e) => {deletePet(pet._id)}}>Delete</button></p> 
            <p><Link to={"/"} className="form-link">Back to All Pets</Link></p>
        </div>
    )
}

export default PetDetails;