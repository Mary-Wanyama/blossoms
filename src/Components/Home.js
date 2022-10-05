import React, { useState} from "react";

function Home() {
    // let url = 'http://localhost:3000/'
    // const [data,setData ] = useState([])

    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=> res.json())
    //     .then(setData)
    // },[])

    const [data, setData] = useState([{
        id : 0,
        title : 'Introduction to React',
        content : 'React is javascript library that is confused for a framework',
        author : 'Mary Wanyama',
        likes : 0
    },
    {
        id : 1,
        title : 'Props and state in react',
        content : 'Props and state are two feature of react that help in data transmission. they do a similar yet different task',
        author : 'Immaculate Wanyama',
        likes : 0
    },
    {
        id : 2,
        title : 'components in react',
        content : 'Components are like the building blocks of react. ',
        author : 'Mary Wanyama',
        likes : 0
    },
    {
        id : 3,
        title : 'Main features of  React',
        content : 'there are several main features in react. props, componts, hooks, lists and keys, and may others',
        author : 'Mary Immaculate',
        likes : 0
    }
])


    return(
        <div className="home">

            {/* <h2>Home page</h2> */} 
            {data.map((blogs)=>( 
                <div key={blogs.id}>
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