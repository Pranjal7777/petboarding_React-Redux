

import { configureStore } from "@reduxjs/toolkit"
import { petBoardingReducer } from "../PetBoarding/reducer"
import authReducer from "../auth/reducer"
import adminReducer from "../../admin/reducer"
export const store = configureStore({
    reducer: {

        petBoardingData: petBoardingReducer,
        auth: authReducer,
        admin: adminReducer
    }
})
