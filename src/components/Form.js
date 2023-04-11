import React from "react";
import "../styles/form.css"

export default function Form() {
    const [formData, setFormData] = React.useState({
        mailId: "",
        pwd: "",
        pwdCheck: "",
        newsletter: false
    })

    function setFormDataValue(event) {
        const { value, type, checked, name } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type=="checkbox" ? checked : value
            }
        })
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        if (formData.pwd != formData.pwdCheck) {
            console.log("Passwords do not match!");
            formData.pwdCheck = "";
        } else {
            formData.newsletter && console.log("You have subscribed to newsletter");
            //call api
        }
    }

    return (
        <div className="form-container">
        <form id="form-data" onSubmit={formSubmitHandler}>
            <input name="mailId" placeholder="Enter mail id" type="text" value={formData.mailId} onChange={setFormDataValue} />
            <input name="pwd" placeholder="Enter password" type="password" value={formData.pwd} onChange={setFormDataValue} />
            <input name="pwdCheck" placeholder="Re-type password" type="password" value={formData.pwdCheck} onChange={setFormDataValue} />
            <label><input name="newsletter" type="checkbox" checked={formData.newsletter} onChange={setFormDataValue} />I want to join the newsletter</label>
            <button>Sign up</button>
        </form>
        </div>
    )
}