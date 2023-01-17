import React, {Fragment, useState} from "react";

const InputClub = () => {

    const [name, setName] = useState("")
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {name};
            const response =await fetch("http://localhost:5000/clubss", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location ="/";
            
        } catch (err) {
            console.error(err.message)
            
        }
    }
    
    

    return (
        <Fragment>
            <form className = "d-flex mt-5" onSubmit = {onSubmitForm}> 
                <input 
                size="lg"
                type="text" 
                className = "form-control"
                placeholder="Topluluk Adı Giriniz"
                value={name} onChange = {e => setName(e.target.value)}/>

                <button className = "gradient btn">
                Ekle
                </button>          
            </form>
        </Fragment>
    )
}


export default InputClub;
