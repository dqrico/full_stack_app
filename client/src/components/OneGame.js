import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams} from 'react-router-dom';



const OneGame = (props) => {

 // 1.FUNCTIONAL
    const [game, setGame] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGame(res.data);
            })
            .catch((err)=>{console.log(err)})
    },[id])

    const deleteOneGame = () =>{
        axios.delete(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{console.log(err)})
    }


 // 2.RETURN
    return(
        <div style={{textAlign:"center"}}>
            <header>
                <h1>{game.name}</h1>
                <Link to={"/"}>HOME</Link>
            </header>

            <img src={game.image} alt="game image" style={{width:"150px", height:"150px"}} />
            <p>{game.genre}</p>
            <p>{game.yearReleased}</p>
            <p>{game.rating}</p>
            <p>{game.company}</p>
            <button onClick={deleteOneGame}>DELETE</button>
        </div>
    )
}

export default OneGame;