import axios from "axios"
import * as types from "./types"


const sendDataReq = (payload) => ({ type: types.SEND_DATA_REQ })

const sendDataSuccess = (payload) => ({ type: types.SEND_DATA_SUCCESS, payload })

const sendDataFail = (payload) => ({ type: types.SEND_DATA_FAIL, payload })

const getDataReq = (payload) => ({ type: types.GET_DATA_REQ })

const getDataSuccess = (payload) => ({ type: types.GET_DATA_SUCCESS, payload })

const getDataFail = (payload) => ({ type: types.GET_DATA_FAIL, payload })

const getSingleDataReq = (payload) => ({ type: types.GET_SINGLE_DATA_REQ })

const getSingleDataSuccess = (payload) => ({ type: types.GET_SINGLE_DATA_SUCCESS, payload })

const getSingleDataFail = (payload) => ({ type: types.GET_SINGLE_DATA_FAIL, payload })

const delete_Row = (payload) => ({ type: types.DELETE_PET_SHOP, payload })


const bookingReq = (payload) => ({ type: types.BOOKING_REQ, payload })

const bookingSuccess = (payload) => ({ type: types.BOOKING_SUCCESS, payload })

const bookingFail = (payload) => ({ type: types.BOOKING_FAIL, payload })



const userBookingReq = (payload) => ({ type: types.USER_BOOKING_REQ, payload })

const userBookingSuccess = (payload) => ({ type: types.USER_BOOKING_SUCCESS, payload })

const userBookingFail = (payload) => ({ type: types.USER_BOOKING_FAIL, payload })





const SendData = (formData) => (dispatch) => {
    dispatch(sendDataReq("Sending"))
    try {
        axios.post("https://petboardingreactredux.herokuapp.com/data", formData).then((res) => {
            dispatch(sendDataSuccess())
            alert("entity successfully added")
        }).catch((error) => {
            dispatch(sendDataFail(error))
        })

    } catch (error) {

    }
}

const GetDataa = () => (dispatch) => {
    dispatch(getDataReq("Getting Data "))
    try {
        axios.get("https://petboardingreactredux.herokuapp.com/data").then((res) => {
            dispatch(getDataSuccess(res.data))

        }).catch((error) => {
            dispatch(getDataFail(error))
        })

    } catch (error) {

    }
}


const GetSingleDataa = (id) => (dispatch) => {
    dispatch(getSingleDataReq("Getting Data "))
    try {
        axios.get(`https://petboardingreactredux.herokuapp.com/data/${id}`).then((res) => {
            dispatch(getSingleDataSuccess(res.data))

        }).catch((error) => {
            dispatch(getSingleDataFail(error))
        })

    } catch (error) {

    }
}


const Deletee = (id) => (dispatch) => {

    axios.delete(`https://petboardingreactredux.herokuapp.com/data/${id}`).then((res) => {
        dispatch(delete_Row())
        dispatch(GetDataa())
    })

}




const CreateBooking = (user_id, entity_id, type_of_pet, booking_date, end_date) => (dispatch) => {
    // console.log(type_of_pet, "check this")
    dispatch(bookingReq())
    console.log(user_id, "id")
    try {

        axios.post("https://petboardingreactredux.herokuapp.com/booking", {
            user_id,
            entity_id,
            type_of_pet,
            booking_date,
            end_date
        }).then((res) => {
            dispatch(bookingSuccess(res.data))
            alert("Booking Successfully Create Check Status on Homepage")
        }).catch((error) => {
            dispatch(bookingFail(error))
        })

    } catch (error) {

    }

}





const GetUserBookings = (user_id) => (dispatch) => {
    dispatch(userBookingReq("Getting User Booking"))
    try {
        axios.get(`https://petboardingreactredux.herokuapp.com/booking/${user_id}`).then((res) => {
            dispatch(userBookingSuccess(res.data))

        }).catch((error) => {
            dispatch(userBookingFail(error))
        })

    } catch (error) {

    }
}









export { SendData, GetDataa, GetSingleDataa, Deletee, CreateBooking, GetUserBookings }

