
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetDataa } from "../PetBoarding/action"
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom"
import { logout } from "../auth/action"
import { Deletee } from "../PetBoarding/action"
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Styles from "./Home.module.css"

export const Home = () => {

    const { accessToken } = useSelector((state) => state.auth)

    const { role } = useSelector((state) => state.auth.user)
    // console.log(role, "role")
    var admin = false
    if (role == "admin") {
        admin = true
    }
    const dispatch = useDispatch()


    const { data } = useSelector((state) => state.petBoardingData)
    console.log(data)

    const [Sort, setSort] = useState([])



    const navigate = useNavigate()


    const sort = (type) => {

        if (type === "highbycost") {
            setSort([...data.sort((a, b) => b.cost - a.cost)])
        }
        if (type === "lowbycost") {
            setSort([...data.sort((a, b) => a.cost - b.cost)])
        }
        if (type === "highbyrating") {
            setSort([...data.sort((a, b) => b.rating - a.rating)])
        }
        if (type === "lowbyrating") {
            setSort([...data.sort((a, b) => a.rating - b.rating)])
        }

    }

    const Logout = () => {
        dispatch(logout())
        navigate("/login")
    }

    const Delete = (id) => {

        dispatch(Deletee(id))

    }




    useEffect(() => {
        if (!accessToken) {
            navigate("/login")
        }
    }, [accessToken])

    useEffect(() => {
        dispatch(GetDataa())
    }, [])

    return <>

        <div style={{ display: "flex", justifyContent: "end", marginRight: "25px", padding: "5px", margin: "2px" }}>  {admin ? "" : <Button onClick={() => { navigate("/checkbookings") }} variant="contained" color="success" >
            Check Bookings
        </Button>}
            {admin ? <Button onClick={() => { navigate("/RequestedBookingsPageForAdmin") }} variant="contained" color="primary" style={{ marginLeft: "5px" }}  >   Check Requested Bookings   </Button> : ""}
            <Button onClick={Logout} variant="contained" color="error" style={{ marginLeft: "5px" }}  >   Logout   </Button>
        </div>
        {admin ? <h1>Petboarding Site - ADMIN ACCESS</h1> : <h1>Petboarding Site</h1>}
        <span style={{ fontWeight: "bold", marginLeft: "12px" }}>Cost :</span>  <Button variant="contained" color="info" onClick={() => { sort("lowbycost") }}>   Low to high    </Button>     <Button variant="contained" color="info" onClick={() => { sort("highbycost") }}  >   High to low    </Button>
        <br /> <br />
        <span style={{ fontWeight: "bold" }}>Rating :</span>  <Button variant="contained" color="info" onClick={() => { sort("lowbyrating") }}>   Low to high    </Button>     <Button variant="contained" color="info" onClick={() => { sort("highbyrating") }}  >   High to low    </Button>

        <TableContainer component={Paper} style={{ width: "70%", margin: "auto", marginTop: "50px" }}>
            <Table style={{ cursor: "pointer" }} sx={{ minWidth: 650 }} aria-label="caption table">

                <TableHead style={{ background: "#417D7A", color: "white", fontWeight: "bold" }}>

                    <TableRow style={{ fontWeight: "bold" }}>

                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} >Name</TableCell>

                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">City</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Address</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Capacity</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Cost Per Day </TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Verified</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Rating</TableCell>
                        {admin ? <TableCell align="center">Delete</TableCell> : ""}

                    </TableRow>
                </TableHead>
                <TableBody >
                    {data.map((row) => (
                        <TableRow key={row.id} >
                            <TableCell onClick={() => { navigate(`entitypage/${row._id}`) }} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell onClick={() => { navigate(`entitypage/${row._id}`) }} align="center">{row.city}</TableCell>
                            <TableCell onClick={() => { navigate(`entitypage/${row._id}`) }} align="center">{row.address}</TableCell>
                            <TableCell onClick={() => { navigate(`entitypage/${row._id}`) }} align="center">{row.capacity}</TableCell>
                            <TableCell onClick={() => { navigate(`entitypage/${row._id}`) }} align="center">{row.cost}</TableCell>
                            <TableCell onClick={() => { navigate(`entitypage/${row._id}`) }} align="center">{row.verified}</TableCell>
                            <TableCell onClick={() => { navigate(`entitypage/${row._id}`) }} align="center">{row.rating}</TableCell>
                            {admin ? <TableCell onClick={() => { Delete(row._id) }} align="center">X</TableCell> : ""}
                        </TableRow>
                    ))}


                </TableBody>
            </Table>
        </TableContainer>

        {
            admin ? <Button style={{ marginRight: "60%", marginTop: "20px" }} variant="contained" color="error" onClick={() => { navigate("/createentity") }}>
                Create Entity
            </Button> : ""
        }



    </>
}


