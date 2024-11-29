import React, { useState } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import img from '../assest/Side-Image.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import Api from '../Common';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios({
                url: Api.signUp.url,
                method: Api.signUp.method,
                headers: {
                    "Content-Type": "application/json"
                },
                data: userData
            });

            const dataApi = response.data;

            if (dataApi.success) {
                toast.success(dataApi.message);
                navigate("/Log-In");
            } else if (dataApi.error) {
                toast.error(dataApi.message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.log(error);
        }
    }

    return (
        <Box py={6}>
            <Grid container spacing={3}>
                <Grid item xl={7} lg={6}>
                    <Box>
                        <Typography component={'img'} src={img} sx={{ height: "600px", width: "700px", display: { xs: "none", lg: "block" } }} />
                    </Box>
                </Grid>
                <Grid item lg={6} xl={5} xs={12}>
                    <Box sx={{ display: "flex", alignItems: "center", height: "100%", justifyContent: { xs: "center", xl: "start" }, width: "100%", px: "25px" }}>
                        <Box>
                            <Typography sx={{ fontSize: { md: "30px", sm: "26px", xs: "23px" }, fontWeight: "bold" }}>Create an account</Typography>
                            <Typography sx={{ fontSize: { md: "14px", xs: "13px" } }} > Enter your details below</Typography>

                            <form>
                                <div>
                                    <div className='mt-8 border-b pb-2'>
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            className='w-full h-full outline-none'
                                            name='name'
                                            value={userData.name}
                                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className='mt-5 border-b pb-2'>
                                        <input
                                            type='text'
                                            placeholder='Email or Phone Number'
                                            className='w-full h-full outline-none'
                                            name='email'
                                            value={userData.email}
                                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        />
                                    </div>

                                    <div className='mt-5 border-b pb-2'>
                                        <input
                                            type='password'
                                            placeholder='Password'
                                            className='w-full h-full outline-none'
                                            name='password'
                                            value={userData.password}
                                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                        />
                                    </div>

                                </div>

                                <button onClick={handleSubmit} className='bg-red-500 mt-6 py-2 sm:px-24 px-20 text-white rounded'>Create Account</button>

                                <div className='w-24 h-9'></div>
                            </form>

                            <p className='text-sm mt-5 text-center font-normal'>Already have account? <Link href='/Log-In' sx={{ color: "#000", textDecoration: "none", fontWeight: 500, ":hover": { borderBottom: "1px solid" }, cursor: "pointer", paddingLeft: "5px" }}>Log in</Link> </p>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignUp;