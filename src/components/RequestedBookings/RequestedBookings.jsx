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
import { GetUserBookingsForAdmin, ApproveOrReject } from "../../admin/action"
import { useEffect } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
export const RequestedBookingsPageForAdmin = () => {

    const { bookingsData } = useSelector((state) => state.admin)


    console.log(bookingsData, "bookingsDatauser")
    const dispatch = useDispatch()


    const handleBooking = (type) => {
        let types = type
        return types
    }


    useEffect(() => {
        dispatch(GetUserBookingsForAdmin())
    }, [])


    return <>

        <h1>Requested Booking Details</h1>

        <TableContainer style={{ width: "70%", margin: "auto" }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">

                <TableHead style={{ background: "#417D7A", color: "white", fontWeight: "bold" }}>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center" >Merchant</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center" >Booking Start Date</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Booking End Date</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Status</TableCell>
                        <TableCell style={{ fontWeight: "bold", color: "rgb(237,230,219)" }} align="center">Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {bookingsData.map((row) => (

                        <TableRow key={row.booking_date}>
                            <TableCell component="th" scope="row" align="center">
                                {row.entity_id.name}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {row.booking_date}
                            </TableCell>
                            <TableCell align="center">{row.end_date}</TableCell>
                            <TableCell align="center">{row.booking_status} </TableCell>
                            <TableCell align="center"><span onClick={() => { dispatch(ApproveOrReject(row._id, "Confirmed")) }}><DoneIcon /></span> <span onClick={() => { dispatch(ApproveOrReject(row._id, "Rejected")) }}><CloseIcon /></span></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}