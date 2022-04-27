
import { useParams } from "react-router-dom"
import { GetDataa, CreateBooking } from "../PetBoarding/action"
import { useDispatch, useSelector } from "react-redux"
import { GetSingleDataa } from "../PetBoarding/action"
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

export const EntityPage = () => {

    const { singleData } = useSelector(state => state.petBoardingData)
    const { user } = useSelector((state) => state.auth)
    // console.log("user", user._id)
    const { id } = useParams()
    const dispatch = useDispatch()



    const [bookingInput, setBookingInput] = useState({
        //  entity_id: "",
        type_of_pet: "",
        booking_date: "",
        end_date: ""
    })

    const handleChange = (e) => {

        const { name, value } = e.target
        setBookingInput({ ...bookingInput, [name]: value })
    }

    const handleSubmit = () => {
        dispatch(CreateBooking(user._id, singleData._id, bookingInput.type_of_pet, bookingInput.booking_date, bookingInput.end_date))
    }




    useEffect(() => {
        dispatch(GetSingleDataa(id))
    }, [])

    return <>

        <h1>Entity Page</h1>


        <TableContainer component={Paper} style={{ width: "95%", margin: "auto", marginTop: "50px" }}>
            <Table style={{ cursor: "pointer" }} sx={{ minWidth: 650 }} aria-label="caption table">

                <TableHead style={{ background: "#417D7A", color: "white", fontWeight: "bold" }}>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}>Name</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">City</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">Address</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">Capacity</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">Cost Per Day </TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">Verified</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">Rating</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">typesofhome</TableCell>


                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">Area size</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">No. of pets </TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">place pet sleep</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">potty breaks</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="right">petsize</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {singleData((row) => ( */}
                    <TableRow  >
                        <TableCell component="th" scope="row">
                            {singleData.name}
                        </TableCell>
                        <TableCell align="right">{singleData.city}</TableCell>
                        <TableCell align="right">{singleData.address}</TableCell>
                        <TableCell align="right">{singleData.capacity}</TableCell>
                        <TableCell align="right">{singleData.cost}</TableCell>
                        <TableCell align="right">{singleData.verified}</TableCell>
                        <TableCell align="right">{singleData.rating}</TableCell>

                        <TableCell align="right">{singleData.typesofhome}</TableCell>
                        <TableCell align="right">{singleData.areasize}</TableCell>
                        <TableCell align="right">{singleData.noofpets}</TableCell>
                        <TableCell align="right">{singleData.placepetsleep}</TableCell>
                        <TableCell align="right">{singleData.pottybreaks}</TableCell>
                        <TableCell align="right">{singleData.petsize}</TableCell>
                    </TableRow>
                    {/* ))} */}
                </TableBody>
            </Table>
        </TableContainer>

        <h1>Create a Booking</h1>

        <TextField onChange={(e) => { handleChange(e) }} name='type_of_pet' id="outlined-search" label="type of pet" type="search" />
        <TextField onChange={(e) => { handleChange(e) }} style={{ marginLeft: "20px" }} name='booking_date' id="outlined-search" label="booking date" type="search" />
        <TextField onChange={(e) => { handleChange(e) }} style={{ marginLeft: "20px" }} name='end_date' id="outlined-search" label="booking end date" type="search" />
        <Button onClick={handleSubmit} style={{ marginLeft: "20px", marginTop: "7px", fontWeight: "bold" }} variant="contained" color="primary">
            Book
        </Button>

    </>
}