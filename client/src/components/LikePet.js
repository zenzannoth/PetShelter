import React, { useEffect, useState } from "react";
import axios from 'axios';

const LikePet = (props) => {
    const { id } = props;
    const { like, setLike } = useState({});
    const [ pet, setPet ] = useState({});
    const [ clicked, setClicked ] = useState(false);

    // useEffect = (() => {
    //     axios.get("http://localhost:8000/api/pets/update" + id)
    //         .then((res) => {
    //             setLike(res.data.like);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, []);

    const submitLike = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/pets/" + id, pet)
            .then((res) => {
                setPet(res.data);
                setLike(res.data.like + 1);
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