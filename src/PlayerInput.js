import {memo, useState} from "react";

const PlayerInput = memo(({id,label,onSubmit}) => {
    const [userName, setUserName] = useState (``);
   
    const handleSubmit = (event) =>{
    event.preventDefault();
    onSubmit(id,userName);
    console.log(id);
    console.log(userName);
}

return(

    <form className="column" onSubmit={handleSubmit}>
        <label className="header" htmlFor={userName}> {label} </label>
        <input
            type="text"
            id="userName"
            autoComplete="off"
            placeholder="Githab username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}></input>

        <button className="button"
                type="submit"
                disabled={!userName.length}>
                    submit
                </button>

    </form>
)
})
export default PlayerInput;