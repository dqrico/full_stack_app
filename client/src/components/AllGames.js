import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";



const AllGames = (props) =>{

 // 1.FUNCTIONAL
    const [gameList, setGameList] = useState([]); //deconstruct state array then initialize as empty array

    const deleteGame = (idFromBelow) =>{
        axios.delete(`http://localhost:8000/api/games/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(gameList.filter(game => game._id !== idFromBelow))
            })
            .catch((err)=>{console.log(err)})
    }
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/games") //axios request to get data from our api
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(res.data);
            })
            .catch((err)=>{console.log(err)})

    }, [])


 // 2.RETURN
    return(
        <div>
            <header>
                <h1>GAME ON</h1>
                <Link to={"/new"}>ADD NEW</Link>
            </header>
            
            {
                gameList.map((game, index)=>(
                    <div key={game._id} style={{textAlign:"center"}}>
                        <Link to={`/game/${game._id}`}>{game.name}</Link>
                            <br/>
                            <img src={game.image} alt="Game Picture" style={{width:"150px", height:"150px"}} />
                            <br/>
                        <button onClick={()=>deleteGame(game._id)}>DELETE</button>
                        <Link to={`/game/edit/${game._id}`}>EDIT</Link>
                    </div>
                ))
            }
        </div>
    )
}


export default AllGames;