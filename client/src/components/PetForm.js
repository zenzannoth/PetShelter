import React from 'react';
import '../App.css';
import { Link } from '@reach/router';

const PetForm = (props) => {
    const { pet, setPet, errors, handleSubmit, btnLabel } = props; //add the res of pet attributes
    const petSex = [ "Male", "Female" ];
    
    const updatePets = e => {
        console.log(e.target.name);
        let newPet = { ...pet };
        newPet[e.target.name] = e.target.value;
        setPet(newPet);
    }


return (
    <div>
        <form onSubmit={ (e) => handleSubmit(e) }>
            <div>
                <label>Pet Name: </label>
                {
                    errors.petName ?
                        <span className="error">{ errors.petName.message } </span>
                        : null
                }
                <input type="text" name="petName" value={ pet.petName }
                onChange={ (e) => updatePets(e) } />
            </div>
            <div>
                <label>Pet Type: </label>
                    {
                        errors.petType ?
                        <span className="error">{ errors.petType.message }</span>
                        : null
                    }
                <input type="text" name="petType" value={ pet.petType }
                onChange={ (e) => updatePets(e) } />
            </div>
            <div>
                <label>Sex: </label>
                    {
                        errors.petSex ?
                        <span className="error">{ errors.petSex.message} </span>
                        : null
                    }
                <select
                    name="petSex" value={pet.petSex} onChange={ (e) => updatePets(e) } >
                    <option value=""></option>
                    { petSex.map((petSex) => <option value={petSex} key={petSex}>{petSex}</option>) }
                </select>
            </div>
            <div>
            <label>Pet Description: </label>
                {
                    errors.description ?
                    <span className="error">{ errors.description.message }</span>
                    : null
                }
                <input type="text" name="description" value={ pet.description }
                onChange={ (e) => updatePets(e) } />
            </div>
            <button type="submit">{ btnLabel }</button>
        </form>
        <Link to="/" className="add-link">Cancel</Link>
    </div>
        )
}

export default PetForm;