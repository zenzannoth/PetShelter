import '../App.css';
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from 'axios';

const PetList = (props) => {
    // const { removeFromDom } = props;
    // const [ pets, setPets ] = useState(props);
    
    // useEffect(() => {
    //     axios.get("http://locahost:8000/api/pets/")
    //         .then((res) => {
    //             setPets(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // })

    // const deletePet = (petId) => {
    //     axios.delete("http://localhost:8000/api/pets/" + petId)
    //         .then(res => {
    //             removeFromDom(petId);
    //             setPets(pets);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     }, [])
    // }
    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to="/pets/new">Add a pet to the shelter</Link>
            </div>
            <h2>These pets are looking for a good home</h2>
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
                                    <td><Link to={`/pets/${pet._id}`} className="pet-link">details</Link> | <Link className="form-link" to={"/pets/update/" + pet._id }> edit</Link></td>
                                </tr>
                        })}
                    </tbody>
                </table>
                <table >
                        
                </table>
                {/* <div><button className="del-btn" onClick={(e) => {deletePet(pet._id)}}></button></div> */}
            </div>
        </div>
    )
}

export default PetList;