import * as types from "./types"

const inititalState = {

    loading: "",
    error: "",
    data: [],
    singleData: [],
    userBookings: [],
    booking_req_data_for_admin: []
}

export const petBoardingReducer = (state = inititalState, { type, payload }) => {


    switch (type) {

        case (types.SEND_DATA_REQ):
            return { ...state, loading: payload }
        case (types.SEND_DATA_SUCCESS):
            return { ...state }
        case (types.SEND_DATA_FAIL):
            return { ...state, error: payload }


        case (types.GET_DATA_REQ):
            return { ...state, loading: 'payload' }
        case (types.GET_DATA_SUCCESS):
            return { ...state, data: payload }
        case (types.GET_DATA_FAIL):
            return { ...state, error: payload }


        case (types.GET_SINGLE_DATA_REQ):
            return { ...state, loading: 'payload' }
        case (types.GET_SINGLE_DATA_SUCCESS):
            return { ...state, singleData: payload }
        case (types.GET_SINGLE_DATA_FAIL):
            return { ...state, error: payload }

        case (types.DELETE_PET_SHOP):
            return { ...state, loading: false }

        case (types.BOOKING_REQ):
            return { ...state, loading: true }
        case (types.BOOKING_SUCCESS):
            return { ...state, loading: false }
        case (types.BOOKING_FAIL):
            return { ...state, error: payload }


        case (types.USER_BOOKING_REQ):
            return { ...state, loading: true }
        case (types.USER_BOOKING_SUCCESS):
            return { ...state, loading: false, userBookings: payload }
        case (types.USER_BOOKING_FAIL):
            return { ...state, error: payload }


        default:
            return state
    }


}


