import PropTypes from "prop-types";

TextInput.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    setValue: PropTypes.func,
}

export default function TextInput({value,id,label,setValue}){

    return (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input value={value} onChange={(e)=> setValue(e.target.value)} type="text" name={value} id={id}/>
    </div>
    )
}