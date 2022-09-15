import React, { useState } from "react";

export function useForm(data = {username: '', password: ''}){
    const [formData, setData] = useState(data);

    const userInputs = (e) => setData(prevData => ({...prevData, [e.target.name]: e.target.value}))

    return{
        formValues: formData,
        onInput: userInputs
    }
}


export function Login() {
    const {formValues, onInput} = useForm()
    console.log(formValues)

    return(
        <form>
            <h2>- User login through UseForm:</h2>
            <input type="text" name="username" placeholder="username" value={formValues.username} onChange={onInput}/>
            <input type="password" name="password" placeholder="password" value={formValues.password} onChange={onInput}/>
        </form>
    )

    
}