import React, {useState, useEffect} from 'react';
// import io from 'socket.io-client'

// const newSock = io('http://localhost:8000', {
//     query:{
//         id:'akinnagbe'
//     }
// })
const Register = (props) => {
    const [name, setName]= useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword]= useState('')


    const submit=()=>{
        if(username ==='' && password === '') return
        fetch('http://localhost:8000/api/user/register',{
            credentials:'same-origin',
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username,
                password,
                name
            })
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                props.history.push('/')
            }else{
                alert('an error ocurred')
            }
        }).catch(err=>{
            alert(err)
        })
        setPassword('')
        setUsername('')

    }
    return (
        <div className='signIn'>
            <h1 className='talk'>Let's Talk</h1>
            <div className='border'>
                <div className='signIn-card'>
                    <div className='logTxt'><h1>Register</h1></div>
                    <div>
                        <div className='inputs-reg'>
                            <div className='text-input-reg'>
                                <input 
                                    type='text' 
                                    value={name} 
                                    placeholder='name'
                                    onChange={(e)=>setName(e.target.value)}
                                />
                            </div>
                            <div className='text-input-reg'>
                                <input 
                                    type='text' 
                                    value={username} 
                                    placeholder='username'
                                    onChange={(e)=>setUsername(e.target.value)}
                                />
                            </div>
                            <div className='password-input-reg'>
                                <input 
                                    type='password' 
                                    value={password} 
                                    placeholder='password'
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='login-btn'onClick={submit} >register</div>
                </div>
                <div className='account'>
                    <h3 className='h3' onClick={()=>props.history.push('./')} >have an account? login</h3>
                </div>
            </div>
        </div>
    );
};

export default Register;