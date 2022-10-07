import React, {useEffect, useState} from 'react';


function Home() {
    const urlPath = 'https://lit-depths-86097.herokuapp.com/blogs'

    const [data, setData] = useState([])

   
useEffect(()=>{
    fetch(urlPath)
    .then(res=>res.json())
    .then(json =>{
        console.log(json)
        setData(json)
    })
}, [])


    return(
        <div className='home'>
            <div className='homediv'>
            <h3>home page</h3>
            </div>
            

             {data.map((blogs)=>( 
                <div key={blogs.id} className='card'>
                <h3>{blogs.title}</h3>
                <p>{blogs.content}</p>
                <em> ~ {blogs.author}</em>
                <br/>
                <button>{blogs.likes} likes</button>
                </div>

            ))} 
        </div>
    )
}
export default Home