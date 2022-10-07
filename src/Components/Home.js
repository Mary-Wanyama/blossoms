import React, { useState } from 'react';


function Home() {
   
    const [data, setData ] = useState([
        {
            id : 1,
            title : 'React Overview',
            content : 'React is a javascrpt library that is often confused for being a framework. ',
            author : 'Mary Wanyama',
            likes: 0
        },
        {
            id : 2,
            title : 'React basic feature',
            content : 'React has one of the most impresive features, including; components, props,  hooks, lists and keys',
            author : 'Mary wanyama',
            likes: 0
        },
        {
            id : 3,
            title : 'Components and props',
            content : ' components are the building blocks of react, props are used to pass on data and features from a component to the other',
            author : 'Mary Wanyama',
            likes: 0
        },
        {
            id : 4,
            title : 'comparison between vanilla javascript and React',
            content : 'The main comparison between them is that, vanilla Js is an imperative language while React is a declarative language',
            author : 'Mary Wanyama',
            likes: 0
        }
    ])


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