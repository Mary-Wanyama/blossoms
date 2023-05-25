import React, {useEffect, useState} from 'react';


function Home() {
    const urlPath = "https://mary-wanyama.github.io/bloom/bloom.json"

    const [data, setData] = useState([])

   
useEffect(()=>{
    fetch(urlPath)
    .then(res=>res.json())
    .then(json =>{
        setData(json)
    })
}, [])



    return(
        <div className='home'>
            <div className='homediv'>
            <h1 className='h1'>
                {/* <video src='smoke.mp4' autoPlay muted /> */}
                <span>B</span> <span>L</span> <span>O</span> <span>S</span> <span>S</span> <span>O</span> <span>M</span> <span>S</span></h1>
            </div>
            

             {data.map((blogs)=>( 
                <div key={blogs.id} className='card'>
                <h3>{blogs.title}</h3>
                <p>{blogs.content}</p>
                <em> ~ {blogs.name}</em>
                </div>

            ))} 
        </div>
    )
}
export default Home