import {React, useCallback, useState} from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";

const PLAYER_ID_ENAM = {
    playerOne:`playerOne`,
    playerTwo:`playerTwo`,
}
const Battle = () =>{
    const [players, setPlayers] = useState({
        playerOneImage:null,
        playerTwoImage:null,
        playerOneName:``,
        playerTwoName:``,
    });

    const handleSubmit = useCallback((id,userName) => {

        setPlayers((prevState) => ({
            ...prevState,
            [`${id}Name`]:userName,
            [`${id}Image`]:`https://avatars.githubusercontent.com/${userName}`})
            )},
            [players]);

    const handleReset =(id) =>{
        setPlayers((prevState) => ({
            ...prevState,
            [`${id}Name`]: ``,
            [`${id}Image`]:null,
        }))
    }

    return(
    <div>
        <div className="row">
            {players.playerOneImage ?
            <PlayerPreview
                avatar={players.playerOneImage}
                userName={players.playerOneName}>
                    <button className="reset" onClick={()=>handleReset(PLAYER_ID_ENAM.playerOne)}>reset</button>
                  </PlayerPreview>  :
            <PlayerInput 
            id={PLAYER_ID_ENAM.playerOne}
            label="Player 1" 
            onSubmit={handleSubmit} />}
               
             {players.playerTwoImage ?
             <PlayerPreview
             avatar={players.playerTwoImage}
             userName={players.playerTwoName}>
            <button className="reset" onClick={()=>handleReset(PLAYER_ID_ENAM.playerTwo)}>reset</button>
                </PlayerPreview>:
             <PlayerInput 
            id={PLAYER_ID_ENAM.playerTwo}
            label="Player 2" 
            onSubmit={handleSubmit} />}
        </div>
        {players.playerOneImage && players.playerTwoImage ? 
        <Link className="button" to={{
            pathname:`results`,
            search:`?playerOneName=${players.playerOneName}&playerTwoName=${players.playerTwoName}`
        }}> Battle </Link>: null
    }
</div>
)}
export default Battle;