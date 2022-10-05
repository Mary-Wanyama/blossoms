// import React, { useState, useEffect} from "react";

// function Home() {
//     let url = 'http://localhost:8000/Blogs'
//     const [data,setData ] = useState([])

//     useEffect(()=>{
//         fetch(url)
//         .then(res=> res.json())
//         .then(json=>{
//             setData(json)
//             console.log(json)
//         })
//     },[])

// console.log(data)

//     return(
//         <div className="home">

//             {/* <h2>Home page</h2> */} 
//             {/* {data.map((blogs)=>( 
//                 <div key={blogs.id}>
//                 <h3>{blogs.title}</h3>
//                 <p>{blogs.content}</p>
//                 <em> ~ {blogs.author}</em>
//                 <br/>
//                 <button>{blogs.likes} likes</button>
//                 </div>

//             ))} */}
//         </div>
//     )
// }
// export default Home