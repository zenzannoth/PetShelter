import React from 'react';
import '../App.css';

const PetForm = (props) => {
    const { pet, setPet, errors, handleSubmit, btnLabel } = props;
    
    const updatePets = e => {
        console.log(e.target.name);
        let newPet = { ...pet };
        newPet[e.target.name] = e.target.value;
        setPet(newPet);
    }



return (
        <div>
            <form  id="formcontainer" onSubmit={ (e) => handleSubmit(e) }>
                <div className="formdiv1">
                    <div>
                        <div className="formtxt"><label>Pet Name: </label>
                        {
                            errors.petName ?
                                <span className="error">{ errors.petName.message } </span>
                                : null
                        }
                        </div>
                        <input type="text" name="petName" value={ pet.petName }
                        onChange={ (e) => updatePets(e) } />
                    </div>
                    <div>
                        <div className="formtxt"><label>Pet Type: </label>
                            {
                                errors.petType ?
                                <span className="error">{ errors.petType.message }</span>
                                : null
                            }
                        </div>
                        <input type="text" name="petType" value={ pet.petType }
                        onChange={ (e) => updatePets(e) } />
                    </div>
                    <div>
                        <div className="formtxt"><label>Pet Description: </label>
                        {
                            errors.description ?
                            <span className="error">{ errors.description.message }</span>
                            : null
                        }
                        </div>
                        <input type="text" name="description" value={ pet.description }
                        onChange={ (e) => updatePets(e) } />
                        <div>
                            <button className="addpet" type="submit">{ btnLabel }</button>
                        </div>
                    
                    </div>
                </div>
                <div className="formdiv2">
                    <h3>Skills (optional)</h3>
                    <div>
                        <div className="formtxt"><label>Skill 1: </label></div>
                        <input type="text" name="skill1" value={ pet.skill1 } onChange={ (e) => updatePets(e) } />
                    </div>
                    <div>
                        <div className="formtxt"><label>Skill 2: </label></div>
                        <input type="text" name="skill2" value={ pet.skill2 } onChange={ (e) => updatePets(e) } />
                    </div>
                    <div>
                    <div className="formtxt"><label>Skill 3: </label></div>
                        <input type="text" name="skill3" value={ pet.skill3 } onChange={ (e) => updatePets(e) } />
                    </div>
                </div>
            </form>
        </div> 
    )
}

export default PetForm;