import React, {useState} from "react";
import Axios from "axios"


function NewPost() {

    // const [addText, setAddText] = useState('')
    const url = 'https://mary-wanyama.github.io/bloom/bloom.json'
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
          title: data.data.title,
          content : data.data.content,
          author : data.data.name,
        })
        .then(res=>console.log(res))

        e.reset()
    }
    

    return(
        <div className="div">
            <h3>New Posts</h3>
            <br />
            <form  onSubmit={(e)=>addDataForm(e)}>
                <p className="label">Title</p><input onChange={(e)=>handle(e)} type='text' id="title" value={data.title} required name="title" placeholder="title" />
                
                <p className="label">Content</p>
                <input onChange={(e)=>handle(e)} type='text' id="content" value={data.content} required name="content" placeholder="enter your content"/>
                
                <p className="label">Author</p>
                
                <input onChange={(e)=>handle(e)} type='text' id="author" value={data.author} required name="author" placeholder=" ~anonymous"/>
                
                <input onChange={(e)=>handle(e)} type='submit'  className="submit"/>
            </form>
        </div>
    )
}
export default NewPost

