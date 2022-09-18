import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate as navigate} from 'react-router-dom';



const NewGame = (props) => {

 // 1.FUNCTIONAL
    const [name, setName] = useState("");
    const [yearReleased,setYearReleased] = useState(0);
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [company, setCompany] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        //Set up request body (required by createNew func in controller)
        axios.post("http://localhost:8000/api/games",
        {
            name,
            yearReleased,
            genre,
            image,
            rating,
            company
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{console.log(err)})
    }


 // 2.RETURN
    return(
        <div>
            <header>
                <h1>Add A Game</h1>
                <Link to={"/"}>HOME</Link>
            </header>

            <form onSubmit={submitHandler}>

                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                </div>

                <div>
                    <label>Year Released</label>
                    <input valueasnumber={yearReleased} onChange={(e)=>setYearReleased(e.target.valueAsNumber)} type="number" />
                </div>

                <div>
                    <label>Genre</label>
                    <select value={genre} onChange={(e)=>setGenre(e.target.value)} name="genre">
                        <option defaultValue hidden>Select Genre</option>
                        <option value="Action">Action</option>
                        <option value="Platform">Platform</option>
                        <option value="Shooter">Shooter</option>
                        <option value="Role Playing">Role Playing</option>
                        <option value="Puzzle">Puzzle</option>
                    </select>
                </div>

                <div>
                    <label>Image</label>
                    <input value={image} onChange={(e)=>setImage(e.target.value)} type="text" />
                </div>

                <div>
                    <label>Rating</label>
                    <select value={rating} onChange={(e)=>setRating(e.target.value)} name="rating">
                        <option defaultValue hidden>Select Rating</option>
                        <option value="E">E</option>
                        <option value="T">T</option>
                        <option value="MA">MA</option>
                        <option value="E10">E10</option>
                        <option value="Not Rated">Not Rated</option>
                    </select>
                </div>

                <div>
                    <label>Company</label>
                    <input value={company} onChange={(e)=>setCompany(e.target.value)} type="text" />
                </div>

                {/* <div>
                    <label>Kid Friendly?</label>
                    <input checked={kidFriendly} onChange={(e)=>setField(e.target.checked)} type="checkbox" />
                </div> */}

                <button>Add New</button>

            </form>

        </div>
    )
}


export default NewGame;