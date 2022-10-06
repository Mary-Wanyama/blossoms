import React, {useState, useEffect} from "react";
import './Motivation.css'

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

    function listQoutes(e) {
        console.log(e.target)
    }


    return(
        <div className="div">
            <p className="p">{quote}</p>
            <div className="motivation">
                <em> ~ {author}</em>
                


                {/* <button onClick={increaseCount}>new quote {count}</button> */}

                <button  onClick={increase} className="class">Quotes read {counter}</button>
                

            </div>
          

        </div>
    )

}
export default Motivation