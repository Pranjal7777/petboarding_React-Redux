import * as types from "./types"

const initialState = {
    loading: false,
    error: "",
    bookingsData: []
}

const adminReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case (types.REQ_BOOKINGS_DATA):
            return { ...state, loading: true }

        case (types.GET_BOOKINGS_DATA_SUCCESS):
            return { ...state, loading: false, bookingsData: payload }

        case (types.REQ_BOOKINGS_DATA_FAIL):
            return { ...state, loading: false, error: payload }


        default:
            return state
    }

}

export default adminReducer