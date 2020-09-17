import React, {useState, useEffect} from 'react';
// import io from 'socket.io-client'

// const newSock = io('http://localhost:8000', {
//     query:{
//         id:'akinnagbe'
//     }
// })
const SignIn = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword]= useState('')


    const submit=()=>{
        if(username ==='' && password === '') return
        fetch('https://0693ee4b-098e-4c78-8010-66e96299af11.mock.pstmn.io/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username,
                password
            })
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                props.history.push('/home')
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
                    <div className='logTxt'><h1>LOGIN</h1></div>
                    <div>
                        <div className='inputs'>
                            <div className='text-input'>
                                <input 
                                    type='text' 
                                    value={username} 
                                    placeholder='username'
                                    onChange={(e)=>setUsername(e.target.value)}
                                />
                            </div>
                            <div className='password-input'>
                                <input 
                                    type='password' 
                                    value={password} 
                                    placeholder='password'
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='login-btn'onClick={submit} >Login</div>
                </div>
                <div className='account'>
                    <h3 className='h3'>don't have an account ? signUp</h3>
                </div>
            </div>
        </div>
    );
};

export default SignIn;