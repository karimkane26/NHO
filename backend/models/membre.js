import mongoose from "mongoose";
const memberschema = new mongoose.Schema({
    nom :{type: String, required: true},
    prenom: {type: String, required: true},
    telephone: {type: String, required: true},
    addresse: {type: String, required: true},
    role : {type: String, enum:["admin,employe"],default: "employe"}
})
const Membre = mongoose.model("Membre",memberschema)
export default Membre;