import React, {useState} from 'react';

const Home = ({history}) => {
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [doc1, setDoc1] = useState('')
    const [doc2, setDoc2] = useState('')
    const [error, setError] = useState(false)

    const handleUpload =(e, doc)=>{
        const file = e.target.files[0]
        const fileReader = new FileReader(file)
        fileReader.readAsDataURL(file);
        fileReader.onload= e=>{
            if(doc ==='doc1'){
                setDoc1(fileReader.result)
            }else if(doc ==='doc2'){
                setDoc2(fileReader.result)
            }else{
                return false
            }
        }
    }
    const handleCompare =()=>{
        if(!doc1.length && !doc2.length){
            setError(true)
            return false
        }else if(!doc2.length && !doc1.length){
            setError(true)
            return false
        }else{
            setError(false)
            console.log(doc1 , doc2)
        }
    }
    return (
        <div className='home'>
            <div className='home-main'>
                <div className='get-started' style={{textAlign:'center'}} >
                    <h2>Get started</h2>
                </div>
                <div className='compare-div'>
                    <div>
                        <h3>First Person</h3>
                        <input type='text' 
                            value={name1} 
                            onChange={(e)=>setName1(e.target.value)}
                        />
                        <label htmlFor='file' className='label'>Upload document</label>
                        <input type='file' id='file' onChange={(e)=>handleUpload(e, 'doc1')} />
                    </div>
                    <div>
                        <h3>Second Person</h3>
                        <input type='text' 
                            value={name2} 
                            onChange={(e)=>setName2(e.target.value)}
                        />
                        <label htmlFor='file2' className='label' >Upload document</label>
                        <input type='file' id='file2' onChange={(e)=>handleUpload(e,'doc2')}/>
                    </div>
                </div>
                <div className='compare-btn'>
                    <div onClick={handleCompare} >Compare</div>
                    <div onClick={()=>history.push('/')} >Logout</div>
                </div>
                <div className='error' style={{opacity:error ? 1 : 0}} >
                    Sorry you cannot compare empty documents
                </div>
            </div>
        </div>
    );
};

export default Home;