import React, {useState} from "react";

function NewPost() {

    // const [addText, setAddText] = useState('')
    
    

    return(
        <React.Fragment>
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
                <input type='submit' />
            </form>
        </React.Fragment>
    )
}
export default NewPost
