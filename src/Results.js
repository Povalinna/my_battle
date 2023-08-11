import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Player from "./Player";
import { madeBattle } from "./api";



const Results = ()=>{
    const location = useLocation();
    const [loading,setLoading] = useState(true);
    const [winner,setWinner] = useState(null);
    const [loser,setLoser] = useState(null);
    const [error,setError] = useState(null);
    

    useEffect(()=>{
    const searchParams = new URLSearchParams(window.location.search);
       console.log(searchParams,window.location.search)
       console.log(searchParams.get(`playerOneName`))
  madeBattle([searchParams.get(`playerOneName`),searchParams.get(`playerTwoName`)])
     .then(([winner,loser])=>{
        setWinner(winner);
        console.log(setWinner);
        setLoser(loser);
      })
    .catch(error => setError(error))
     .finally(()=>setLoading(false))
   },
   []);

   if (error) {
    return
    <p>{error}</p>
}


   if (loading) {
        return
        <div className="loader"></div>;
    }



return(
    
    <div className='row'>
        <p>result</p>
        <Player
              label='Winner'
              score={winner.score}
             profile={winner.profile} ></Player>
            <Player
                label='Loser'
                score={loser.score}
                profile={loser.profile}></Player>
        </div>
    )
}
export default Results;