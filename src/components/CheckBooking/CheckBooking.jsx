import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { GetUserBookings } from "../PetBoarding/action"
import { useEffect } from 'react';


export const CheckBooking = () => {
    const { userBookings } = useSelector((state) => state.petBoardingData)


    const { user } = useSelector((state) => state.auth)


    // const { role } = useSelector((state) => state.auth.user)
    // // console.log(role, "role")
    // var admin = false
    // if (role == "admin") {
    //     admin = true
    // }

    console.log(user, "user")
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetUserBookings(user._id))
    }, [])


    return <>

        <h1>Booking Details</h1>

        <TableContainer style={{ width: "70%", margin: "auto" }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">

                <TableHead style={{ background: "#417D7A", color: "white", fontWeight: "bold" }}>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}>Merchant</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}>Booking Start Date</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Booking End Date</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Status</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {userBookings.map((row) => (

                        <TableRow key={row.booking_date}>
                            <TableCell component="th" scope="row">
                                {row.entity_id.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.booking_date}
                            </TableCell>
                            <TableCell align="center">{row.end_date}</TableCell>
                            <TableCell align="center">
                                {row.booking_status === "Rejected" ? <Button variant="contained" color="error" style={{ marginLeft: "5px" }}  > {row.booking_status}   </Button> : <Button variant="contained" color="success" style={{ marginLeft: "5px" }}  > {row.booking_status}   </Button>}


                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}