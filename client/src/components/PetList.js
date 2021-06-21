import '../App.css';
import React from "react";
import { Link } from "@reach/router";

const PetList = (props) => {
    
    return (
        <div id="homecontainer">
            <Link to="/pets/new" className="addPet">Add a pet to the shelter</Link>
            <div classNam="header">
                <h1>Pet Shelter</h1>
                <h2>These pets are looking for a good home</h2>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.pets.map((pet, index) => {
                            return <tr key={index}>
                                    <td>{pet.petName}</td>
                                    <td>{pet.petType}</td>
                                    <td><Link to={`/pets/${pet._id}`} className="pet-link">details </Link> | <Link className="form-link" to={"pets/" + pet._id + "/edit" }> edit</Link></td>
                                </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PetList;