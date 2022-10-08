import React, {useState} from "react";
import Axios from "axios"


function NewPost() {

    // const [addText, setAddText] = useState('')
    const url = 'https://lit-depths-86097.herokuapp.com/blogs'
    const [data, setData] = useState({
        title: ' ',
        content: ' ',
        author: ' ',
        likes : 0
      })

      function handle(e) {
        const newData = {...data}
        newData[e.target.id] = [e.target.value]
        setData(newData)
        console.log(newData)
      }
    

      function addDataForm(e) {
        e.preventDefault()
        
        Axios.post(url, {
          title: data.title,
          content : data.content,
          author : data.author,
          likes : data.likes
        })
        .then(res=>console.log(res))

        e.reset()
    }
    

    return(
        <div className="div">
            <h3>New Posts</h3>
            <br />
            <form  onSubmit={(e)=>addDataForm(e)}>
                <input onChange={(e)=>handle(e)} type='text' id="title" value={data.title} required name="title" placeholder="title" />
                <br /><br />
                <input onChange={(e)=>handle(e)} type='text' id="content" value={data.content} required name="content" placeholder="enter your content"/>
                <br /><br />
                <input onChange={(e)=>handle(e)} type='text' id="author" value={data.author} required name="author" placeholder=" ~anonymous"/>
                <br /><br />
                <input onChange={(e)=>handle(e)} type='submit'  className="submit"/>
            </form>
        </div>
    )
}
export default NewPost

