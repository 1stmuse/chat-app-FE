import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'


const Home = ({history}) => {
    const [room, setRoom] = useState('')
    const [rooms, setRooms] = useState([])
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    const fetchRooms = async()=>{
        const response = await  fetch(`http://localhost:8000/api/user/rooms/${token}`,)
        const data = await response.json()
        if(data.success){
            setRooms([...rooms, ...data.rooms])
        }
        // console.log(data)
        console.log(localStorage.getItem('token'))
    }
    const clearCook=()=>{
        localStorage.clear('token')
        history.push('/')
    }

    useEffect(()=>{
        fetchRooms()
    },[])

    return (
        <div className='home'>
            <header className='header'>
                <h1 style={{marginRight:'15px'}} >Let's Talk</h1>
                <p className="fa fa-comments fa-2x" aria-hidden="true"></p>
            </header>
            <div className='welcome'><h2>Welcome {user} </h2></div>
            <div className='roomsDiv'>
                <div className='roomForm'>
                    <div className='add'>
                        <h3>Create chatroom</h3>
                    </div>
                    <div className='flexForm'>
                        <div className='may'>
                            <input type='text' className='roomName'/>
                        </div>
                            <div className='addBtn' onClick={clearCook} >Create</div>
                    </div>
                </div>
                <div className='rooms'>
                    <h2 className='avail'>Available rooms</h2>
                    {
                        rooms.length === 0 ?
                            <div>no rooms create, create one</div> :
                            rooms.map(room=>(
                                <div key={room._id} className='room'>
                                    <h2>{room.name} </h2>
                                    <Link to={`chat/${room._id}`} className='link'>join </Link>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;