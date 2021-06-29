import '../App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
// import LikePet from './LikePet';


const PetDetails = (props) => {
    const [pet, setPet] = useState({});
    const [ like, setLike ] = useState(pet.like);
    const [ clicked, setClicked ] = useState(false);

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

    // const addLike = (e) => {
    //     axios.put("http://localhost:8000/api/pets/" + props.id)
    //         .then(res => {
    //             console.log(res.dat);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    
    const handleClick = (e) => {
        // e.preventDefault();
          // SWAP TO NEXT LINE?
        pet.like = pet.like + 1;
        setLike(pet.like);
        axios.put("http://localhost:8000/api/pets/" + props.id + "/edit", pet)
            .then(res => {
                console.log(res.data);
                setClicked(true);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div id="detailsheader">
                <div>
                    <h1 className="detailsleft">Pet Shelter</h1>
                    <h2 style={{textDecoration: "none"}}>Details about: {pet.petName}</h2>
                </div>
                <div className="detailsright">
                    <Link to="/" className="homeLink">back to home</Link>
                    <button className="adoptBtn" onClick={(e) => {deletePet(pet._id)}}>🏚 Adopt</button>
                </div>
            
            </div>
            <div id="formcontainer2">
                <div className="details">
                    <div>
                    <table className="detailstable">
                        <tr className="detailsrow">
                            <td className="bold detailsdata">
                                Pet type:
                            </td>
                            <td className="normal detailsdata">{pet.petType}</td>
                        </tr>
                        <tr className="detailsrow">
                            <td className="bold detailsdata">
                                Description:
                            </td>
                            <td className="normal detailsdata">{pet.description}</td>
                        </tr>
                        <tr className="detailsrow">
                            <td className="bold detailsdata">
                                Skills:
                            </td>
                            <td className="normal detailsdata">{pet.skill1}</td>
                        </tr>
                        <tr className="detailsrow">
                            <td className="bold detailsdata">
                            </td>
                            <td className="normal detailsdata">{pet.skill2}</td>
                        </tr>
                        <tr className="detailsrow">
                            <td className="bold detailsdata">
                            </td>
                            <td className="normal detailsdata">{pet.skill3}</td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div className="likecontainer">
                    <div clasName="likecol">
                        <button type="submit"className="likebtn"
                        onClick={(e) => handleClick(pet.like + 1)}>🤍Like {pet.petName}</button>
                    </div>
                    <div className="likecol">
                        <p className="liketxt">{pet.like} like(s)</p>
                    </div>
                    {/* <div>
                        <LikePet />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PetDetails;