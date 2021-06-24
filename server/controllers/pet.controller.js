const Pet = require('../models/pet.model');

module.exports.index=(req, res) => {
    res.json({
        message: "Hello World!"
    });
}

module.exports.createPet = (req, res) => {
    const { petName, petType, description, like, skill1, skill2, skill3 } = req.body;
    Pet.create({
        petName,
        petType,
        description,
        like,
        skill1,
        skill2,
        skill3
    })
        .then(pet => res.json(pet))
        .catch(err => res.json(err));
}

module.exports.getAllPets = (req, res) => {
    Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.json(err))
}

module.exports.getPet = (req, res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.updateOne({_id:req.params.id}, req.body, {new:true})
        .then(updatePet => res.json(updatePet))
        .catch(err => res.json(err))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}


