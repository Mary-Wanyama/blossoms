import React, {useState, useEffect} from "react";


function Motivation() {


    let [quote, setQuote] = useState('')
    let [author, setAuthor] = useState('')
    const [counter, setCounter] = useState(1)
    
    const increase = () => {
        setCounter(count => count + 1);
      };
     


    
    useEffect(()=>{
       fetch('https://api.quotable.io/random')
        .then(res=>res.json())
        .then(data=>{
            setQuote(data.content)
            setAuthor(data.author)
            console.log(data.author)})
}, [ counter ])

    // function listQoutes(e) {
    //     console.log(e.target)
    // }


    return(
        <div className="div">
            <p className="p">{counter}. {quote}</p>
            <div className="motivation">
                <em> ~ {author}</em>
                


                {/* <button onClick={increaseCount}>new quote {count}</button> */}

                <button  onClick={increase} className="class">New quote</button>
                

            </div>
          

        </div>
    )

}
export default Motivation