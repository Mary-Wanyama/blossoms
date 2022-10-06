import React from "react";
import './NewPost.css'

function NewPost() {

    // const [addText, setAddText] = useState('')
    
    

    return(
        <div className="div">
            <h3>New Posts</h3>
            <br />
            <form>
                <input type='text' required name="title" placeholder="title" />
                <br /><br />
                <input type='text' required name="content" placeholder="enter your content"/>
                <br /><br />
                <input type='email' name="email" placeholder=" enter your email"/>
                <br /><br />
                <input type='text' required name="author" placeholder=" ~anonymous"/>
                <br /><br />
                <input type='submit' className="submit"/>
            </form>
        </div>
    )
}
export default NewPost

