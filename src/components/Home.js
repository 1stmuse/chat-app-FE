import React, {useState, useEffect} from 'react';
import Alert from './Alert'
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
    }
    const clearCook=()=>{
        localStorage.clear('token')
        history.push('/')
    }

    const createRoom = async () =>{
        try {
            const response = await  fetch(`http://localhost:8000/api/user/createRoom/${token}`,{
            credentials:'same-origin',
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name:room})
            })
            const data = await response.json()
            if(data) fetchRooms()
        } catch (error) {
            Alert('error', 'could not create a room')
        }
    }

    useEffect(()=>{
        fetchRooms()
    },[])

    return (
        <div className='home'>
            <header className='header'>
                <h1 style={{marginRight:'15px'}} >Let's Talk</h1>
                <p className="fa fa-comments fa-2x" aria-hidden="true"></p>
                <div className='logout'  onClick={clearCook}>
                    <p>Logout</p>
                </div>
            </header>
            <div className='welcome'><h2>Welcome {user} </h2></div>
            <div className='roomsDiv'>
                <div className='roomForm'>
                    <div className='add'>
                        <h3>Create chatroom</h3>
                    </div>
                    <div className='flexForm'>
                        <div className='may'>
                            <input type='text' 
                                value={room} 
                                className='roomName'
                                onChange={(e)=>setRoom(e.target.value)}
                            />
                        </div>
                            <div className='addBtn' onClick={createRoom} >Create</div>
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