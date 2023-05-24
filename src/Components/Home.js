import React, {useEffect, useState} from 'react';


function Home() {
    const urlPath = [
        {
            "id": 1,
        "title": "Redux",
        "content": "Redux is a predictable state management library for JavaScript applications. It provides a centralized store to manage the application state, making it easier to track and update data across components. Redux follows a unidirectional data flow, ensuring that state changes are handled consistently. By separating state from components, Redux promotes code reusability and simplifies debugging. With its powerful features like middleware and actions, Redux enables developers to build scalable and maintainable applications. Its popularity stems from its ability to handle complex state management scenarios in a predictable and efficient manner.",
        "name": "Talespin"
        },
        {
            "id": 2,
        "title": "React",
        "content": "React is a popular JavaScript library for building user interfaces. It provides a component-based approach, allowing developers to create reusable UI elements. React's virtual DOM efficiently updates only the necessary parts of the interface, enhancing performance. Its unidirectional data flow ensures predictable rendering. React's ecosystem offers extensive community support and a wide range of libraries, making it a versatile tool for building modern, interactive web applications.",
        "name": "Talespin"
        },
        {
            "id": 3,
        "title": "Regex",
        "content": "Regular expressions, commonly known as regex, are powerful tools for pattern matching and text manipulation. They allow you to search, validate, and extract specific patterns within strings. With their concise syntax and flexibility, regex provide a versatile solution for tasks like data validation, text parsing, and search-and-replace operations. Mastering regex empowers developers to handle complex string operations efficiently, making it an essential skill for working with textual data in various programming languages and applications.",
        "name": "Talespin"
        },
        {
            "id": 4,
        "title": "Flutter",
        "content": "Flutter is a powerful cross-platform framework for building mobile applications. It combines a reactive UI framework with a comprehensive set of widgets, allowing developers to create beautiful and performant apps. With its hot-reload feature and extensive community support, Flutter simplifies development, enhances productivity, and enables the creation of visually appealing and responsive mobile experiences.",
        "name": "Talespin"
        },
        {
            "id": 5,
        "title": "Sinatra",
        "content": "Ruby Sinatra is a lightweight web framework that allows developers to create web applications quickly and easily. With its simplicity and elegance, Sinatra provides a minimalist approach to building web applications in Ruby. It offers routing, request handling, and a modular structure, making it a popular choice for small to medium-sized projects.",
        "name": "Talespin"
        }
        ]

    // const [data, setData] = useState([])

   
// useEffect(()=>{
//     fetch(urlPath)
//     .then(res=>res.json())
//     .then(json =>{
//         setData(json)
//     })
// }, [])



    return(
        <div className='home'>
            <div className='homediv'>
            <h1 className='h1'>
                {/* <video src='smoke.mp4' autoPlay muted /> */}
                <span>B</span> <span>L</span> <span>O</span> <span>S</span> <span>S</span> <span>O</span> <span>M</span> <span>S</span></h1>
            </div>
            

             {urlPath.map((blogs)=>( 
                <div key={blogs.id} className='card'>
                <h3>{blogs.title}</h3>
                <p>{blogs.content}</p>
                <em> ~ {blogs.author}</em>
                </div>

            ))} 
        </div>
    )
}
export default Home