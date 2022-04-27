import { Routes, Route } from "react-router-dom"
import { CheckBooking } from "./CheckBooking/CheckBooking"
import { CreateEntity } from "./Create Entity Page/Create_Entity"
import { EntityPage } from "./EntityPage/EntityPage"
import { Home } from "./Home/Home"
import { Login } from "./Login/Login"
import { RegisterPage } from "./Register/Register"
import { RequestedBookingsPageForAdmin } from "./RequestedBookings/RequestedBookings"


export const AllRoutes = () => {
    return <>

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/createentity" element={<CreateEntity />} />
            <Route path="/entitypage/:id" element={<EntityPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkbookings/" element={<CheckBooking />} />
            <Route path="/RequestedBookingsPageForAdmin/" element={<RequestedBookingsPageForAdmin />} />
        </Routes>
    </>
}