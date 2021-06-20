import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetList from '../components/PetList'


const Main = () => {
    const [ pets, setPets ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet.id !== petId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            // .then(res => 
            .then(res => {
                setPets(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
        }, [pets]);
        

    return (
        <div>
           { loaded && <PetList pets={pets} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;