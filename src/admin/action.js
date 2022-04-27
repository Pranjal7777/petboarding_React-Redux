import * as types from "./types"
import axios from "axios"
const reqBookingsData = (payload) => ({ type: types.REQ_BOOKINGS_DATA, payload })
const getBookingsDataSuccess = (payload) => ({ type: types.GET_BOOKINGS_DATA_SUCCESS, payload })
const getBookingsDataFail = (payload) => ({ type: types.REQ_BOOKINGS_DATA_FAIL, payload })


const reqConfrimBooking = (payload) => ({ type: types.REQ_CONFIRM_BOOKING, payload })
const bookingConfirmed = (payload) => ({ type: types.BOOKING_CONFIRMED, payload })
const bookingConfirmationfail = (payload) => ({ type: types.BOOKING_CONFIRMATION_FAILED, payload })





const GetUserBookingsForAdmin = () => (dispatch) => {
    dispatch(reqBookingsData("Getting All User Booking"))
    try {
        axios.get("https://petboardingreactredux.herokuapp.com/admin").then((res) => {
            dispatch(getBookingsDataSuccess(res.data))

        }).catch((error) => {
            dispatch(getBookingsDataFail(error))
        })

    } catch (error) {

    }
}


const ApproveOrReject = (booking_id, booking_status) => (dispatch) => {

    dispatch(reqConfrimBooking())
    try {

        axios.patch(`https://petboardingreactredux.herokuapp.com/booking/${booking_id}`, { booking_status }).then((res) => {
            dispatch(bookingConfirmed())
            dispatch(GetUserBookingsForAdmin())

        }).catch((error) => {
            dispatch(bookingConfirmationfail(error))
        })

    } catch (error) {

    }

}














export { GetUserBookingsForAdmin, ApproveOrReject }