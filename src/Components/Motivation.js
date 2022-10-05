import React, {useState, useEffect} from "react";

function Motivation() {

    let url = 'https://api.quotable.io/random'

    let [quote, setQuote] = useState('')
    let [author, setAuthor] = useState('')
    const [counter, setCounter] = useState(0)
    
    const increase = () => {
        setCounter(count => count + 1);
      };
     



    
    useEffect(()=>{
       fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setQuote(data.content)
            setAuthor(data.author)
            console.log(data.author)})
    }, [ counter])


    return(
        <React.Fragment>
            <p>{quote}</p>
            <em> ~ {author}</em>
            
            {/* <button onClick={increaseCount}>new quote {count}</button> */}
      
        <button  onClick={increase}>Quotes read {counter}</button>
        </React.Fragment>
    )

}
export default Motivation