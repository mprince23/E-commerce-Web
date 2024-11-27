import React, { useState } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import img from '../assest/Side-Image.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import Api from '../Common';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios({
                url: Api.login.url,
                method: Api.login.method,
                headers: {
                    "content-type": "application/json"
                },
                withCredentials: true,
                data: userData
            });

            const dataApi = response.data;

            if (dataApi.success) {
                toast.success(dataApi.message);
                navigate('/');
            } else {
                toast.error(dataApi.message || 'An error occurred. Please try again.');
            }

        } catch (error) {
            console.error(error);
            if (error.response && error.response.data) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }
    };

    return (
        <Box py={6}>
            <Grid container spacing={3}>
                <Grid item xl={7} lg={6}>
                    <Box>
                        <Typography
                            component={'img'}
                            src={img}
                            sx={{
                                height: "600px",
                                width: "700px",
                                display: { xs: "none", lg: "block" },
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item lg={6} xl={5} xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            justifyContent: { xs: "center", xl: "start" },
                            width: "100%",
                            px: "25px",
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: { md: "30px", sm: "26px", xs: "23px" },
                                    fontWeight: "bold",
                                    mb: 2,
                                }}
                            >
                                Log in to Exclusive
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { md: "14px", xs: "13px" },
                                    mb: 2,
                                }}
                            >
                                Enter your details below
                            </Typography>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className="mt-7 border-b pb-2">
                                        <input
                                            type="text"
                                            placeholder="Email or Phone Number"
                                            className="w-full h-full outline-none"
                                            name="email"
                                            value={userData.email}
                                            onChange={(e) =>
                                                setUserData({ ...userData, email: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="mt-7 border-b pb-2">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="w-full h-full outline-none"
                                            name="password"
                                            value={userData.password}
                                            onChange={(e) =>
                                                setUserData({ ...userData, password: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-red-500 mt-8 py-2 sm:px-32 px-20 text-white rounded"
                                >
                                    Log In
                                </button>
                            </form>

                            <Box sx={{ mt: 1, textAlign: "end" }}>
                                <Link
                                    sx={{
                                        color: "red",
                                        textDecoration: "none",
                                        ":hover": { borderBottom: "1px solid red" },
                                        cursor: "pointer",
                                    }}
                                >
                                    Forget Password?
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;