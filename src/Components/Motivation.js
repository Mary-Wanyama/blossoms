import React, {useState, useEffect} from "react";

function Motivation() {

    let url = 'https://api.quotable.io/random'

    let [quote, setQuote] = useState('')
    let [author, setAuthor] = useState('')
    
    let quoting =  useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setQuote(data.content)
            setAuthor(data.author)
            console.log(data.author)})
    }, [])


    return(
        <React.Fragment>
            <p>{quote}</p>
            <em>~ {author}</em>
            <br/>
            <button onClick={e=>quoting}>new quote</button>
        </React.Fragment>
    )

}
export default Motivation