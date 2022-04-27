

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { SendData } from "../PetBoarding/action"

export const CreateEntity = () => {

    const [formData, setFormData] = useState({
        name: "",
        city: "",
        address: "",
        capacity: "",
        cost: "",
        verified: "",
        rating: "",
        typesofhome: "",
        areasize: "",
        noofpets: "",
        pettype: "",
        placepetsleep: "",
        pottybreaks: "",
        petsize: "",
        walks: ""

    })
    const dispatch = useDispatch()
    const handleChange = (e) => {

        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })

    }
    console.log(formData)
    const handleSubmit = () => {

        dispatch(SendData(formData))


    }


    return <>

        <h1>Create Entity</h1>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >





            <div>

                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} name="name" value={formData.name} /> */}


                {/* <input onChange={handleChange} className="name" value={formData.name} type="text" />  */}
                <TextField name='name' value={formData.name} id="outlined-search" label="enter name " type="search" onChange={handleChange} />

                <TextField name='city' onChange={handleChange} value={formData.city} id="outlined-search" label="enter city" type="search" />

                <TextField onChange={handleChange} value={formData.address} name='address' id="outlined-search" label="enter address" type="search" /> <br />

                <TextField onChange={handleChange} value={formData.capacity} name='capacity' id="outlined-search" label=" capacity" type="search" />

                <TextField onChange={handleChange} value={formData.cost} name='cost' id="outlined-search" label="Search cost per day" type="search" />

                <TextField onChange={handleChange} value={formData.verified} name='verified' id="outlined-search" label="verified" type="search" /> <br />

                <TextField onChange={handleChange} value={formData.rating} name='rating' id="outlined-search" label=" rating" type="search" />





                <TextField onChange={handleChange} value={formData.typesofhome} name='typesofhome' id="outlined-search" label="The type of home I stay in" type="search" />

                <TextField onChange={handleChange} value={formData.areasize} name='areasize' id="outlined-search" label="My outdoor area size" type="search" />
                <br />


                <TextField onChange={handleChange} value={formData.noofpets} name='noofpets' style={{ width: "30%" }} id="outlined-search" label=" enter Number of pets that will be watched at one time." type="search" />

                <TextField onChange={handleChange} value={formData.pettype} name='pettype' style={{ width: "30%" }} id="outlined-search" label=" enter type of pet (Accepted Dog,Cat,Rabbits)" type="search" /> <br />

                <TextField onChange={handleChange} value={formData.placepetsleep} name='placepetsleep' style={{ width: "30%" }} id="outlined-search" label="The place your pet will sleep at night" type="search" />

                <TextField onChange={handleChange} value={formData.pottybreaks} name='pottybreaks' style={{ width: "30%" }} id="outlined-search" label="The number of potty breaks provided per day" type="search" /> <br />

                <TextField onChange={handleChange} value={formData.petsize} name='petsize' style={{ width: "30%" }} id="outlined-search" label="Pet size accepted (10 to 20 kg)" type="search" />

                <TextField onChange={handleChange} value={formData.walks} name='walks' style={{ width: "30%" }} id="outlined-search" label="The number of walks provided per day" type="search" />
            </div>
            <br />
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Submit
            </Button>
        </Box>


    </>
}