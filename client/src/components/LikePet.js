import React, { useEffect, useState } from "react";
import axios from 'axios';

const LikePet = (props) => {
    const { id } = props;
    const { like, setLike } = useState({});
    const [ pet, setPet ] = useState({});
    const [ clicked, setClicked ] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id, pet)
            .then(res => {
                setLike(res.data.like);
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const submitLike = (e, like) => {
        e.preventDefault();
        setLike(pet.like = like + 1);
        axios.put("http://localhost:8000/api/pets/" + id + "/edit", pet)
            .then((res) => {
                setPet(res.data);
                setClicked(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <button disabled={clicked} className="like-button" onClick={ (e) => submitLike(e, like) }>Like: { pet.petName }</button>
    )
}

export default LikePet;