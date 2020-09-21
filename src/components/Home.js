import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const Home = ({history}) => {
    const [room, setRoom] = useState('')
    const [rooms, setRooms] = useState([{id:3,name:'james'}, {id:2,name:'james'}, {id:1,name:'james'}])

    return (
        <div className='home'>
            <div className='welcome'><h2>Welcome Akinnagbe!! join a room or create one to start chatting</h2></div>
            <div className='roomsDiv'>
                <div className='rooms'>
                    {
                        rooms.length === 0 ?
                             <div>no rooms create, create one</div> :
                             rooms.map(room=>(
                                 <div key={room.id} className='room'>
                                    <Link className='link'>{room.name} </Link>
                                </div>
                            ))
                    }
                </div>
                <div className='roomForm'>
                    <div className='add'>
                        <h3>Create chatroom</h3>
                    </div>
                    <div classname='form-div'>
                        <div className='may'>
                            <input type='text' className='roomName'/>
                        </div>
                        <div className='addBtn'>Create</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;