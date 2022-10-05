import React from "react";

function NewPost() {
    

    return(
        <React.Fragment>
            <form>
                <input type='text' required name="title" placeholder="title"/>
                <input type='text' required name="content" placeholder="enter your content"/>
                <input type='email' name="email" placeholder=" enter your email"/>
                <input type='text' required name="author" placeholder=" ~anonymous"/>
                <input type='submit' />
            </form>
        </React.Fragment>
    )
}