import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../auth/action"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { accessToken } = useSelector((state) => state.auth)
    console.log(accessToken, "access")

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = () => {

        dispatch(login(input.email, input.password))

    }

    useEffect(() => {
        if (accessToken) {
            navigate("/")
        }
    }, [accessToken])

    return <>
        <div>
            <Button style={{
                marginLeft: "85%", marginTop: "4px"
            }} variant="contained" color="primary" onClick={() => { navigate("/register") }}  >Click here to Register </Button >
            <div style={{ marginTop: "130px" }}>
                <h2>Login </h2>
                {/* <TextField name='name' value={formData.name} id="outlined-search" label="enter name " type="search" onChange={handleChange} /> */}
                <TextField onChange={(e) => { handleChange(e) }} type="text" name="email" placeholder="enter email" /> <br /> <br />


                <TextField onChange={(e) => { handleChange(e) }} type="text" name="password" placeholder="password" /> <br /> <br />

                <Button variant="contained" color="success" onClick={handleSubmit}>
                    Login
                </Button>
            </div>
        </div>
    </>
}