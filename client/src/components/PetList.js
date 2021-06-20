import '../App.css';
import React, { useState } from "react";
import { Link } from "@reach/router";
import axios from 'axios';

const PetList = (props) => {
    const { removeFromDom } = props;
    const [ pets, setPets ] = useState(props);
    const deletePet = (petId) => {
        axios.delete("http://localhost:8000/api/pets/" + petId)
            .then(res => {
                removeFromDom(petId);
                setPets(pets);
        })
        .catch(err => {
            console.log(err)
        }, [])
    }
    return (
        <div>
            <h1>Available Pets</h1>
            {props.pets.map((pet, index) => {
                return <p key={index}>
                <Link to={`/pets/${pet._id}`} className="pet-link">{pet.petName} </Link>
                <button className="del-btn" onClick={(e) => {deletePet(pet._id)}}>Delete</button>
                </p>
            })}
            <Link to="/pets/new" className="add-link">Add a New Pet</Link>
        </div>
    )
}

export default PetList;