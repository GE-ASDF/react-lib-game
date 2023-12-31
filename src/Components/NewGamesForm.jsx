import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./TextInput";

NewGamesForm.propTypes = {
    addGame: PropTypes.func,
}

export default function NewGamesForm({addGame}){
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        addGame({title, cover})
    }
    return (
        <form onSubmit={handleSubmit}>
        <TextInput id="title" label="Título:" value={title} setValue={setTitle} />
        <TextInput id="cover" label="Capa:" value={cover} setValue={setCover} />
        <button type="submit">Adicionar à biblioteca</button>
      </form>
    )
}