import Button from '@mui/material/Button';
import { useState } from 'react';
import { signup } from "../auth/action"
import { useDispatch } from "react-redux"
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom"
export const RegisterPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({

        name: "",
        email: "",
        password: ""

    })

    const handleChange = (e) => {

        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })

    }
    // console.log(inputs)
    const handleSubmit = () => {

        dispatch(signup(inputs.name, inputs.email, inputs.password))
    }

    return <>
        <div>
            <Button style={{
                marginLeft: "85%", marginTop: "4px"
            }} variant="contained" color="primary" onClick={() => { navigate("/login") }}  >Click here to Login </Button >
            <div style={{ marginTop: "140px" }} >
                <h2>Register </h2>

                <TextField type="text" onChange={handleChange} name="name" placeholder="enter name" value={inputs.name} /> <br /> <br />

                <TextField type="text" onChange={handleChange} name="email" placeholder="enter email" value={inputs.email} /> <br /> <br />


                <TextField type="text" onChange={handleChange} name="password" placeholder="password" value={inputs.pass} /> <br /> <br />

                <Button onClick={handleSubmit} variant="contained" color="success">
                    Register
                </Button>

            </div>
        </div>


    </>


}