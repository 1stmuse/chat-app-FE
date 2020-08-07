import React, {useState} from 'react';

const SignIn = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword]= useState('')

    const submit=()=>{
        fetch('https://62667f41-743b-43c6-94a9-b0bba1003243.mock.pstmn.io/login',{
            method:'POST',
            mode:'no-cors',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                username,
                password
            })
        })
        // .then(res=>res.json())
        .then(result=>{
            // if(result.success){/
                console.log(result)
                // props.history.push('/home')
            // }else{
                // alert('an error ocurred')
            // }
        }).catch(err=>{
            alert(err)
        })

    }
    return (
        <div className='signIn'>
            <div><h1>Compare text with ease !!</h1></div>
            <div className='signIn-card'>
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
                <div className='login-btn'onClick={submit} >Login</div>
            </div>
        </div>
    );
};

export default SignIn;