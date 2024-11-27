// import React from 'react'
// import { Box, Grid, Typography } from '@mui/material'
// import logo from '../assest/footer-logo.png'
// import Qrcode from '../assest/Qrcode.png'
// import appStore from '../assest/app-store.png'
// import googlePlayApp from '../assest/google-play-app.png'

// const Footer = () => {
//   return (
//     <div className='container mt-5 bg-black'>
//       <Box sx={{ py: "3pc" }}>
//         <Grid container gap={"20px"}>
//           <Grid>
//             <Box>
//               <img src={logo} alt="logo" />

//               <Box sx={{ color: 'white' }}>
//                 <Typography sx={{ fontWeight: 600 }}>Subscribe</Typography>
//                 <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>Get 10% off your first order</Typography>
//               </Box>

//             </Box>
//           </Grid>
//           <Grid>
//             <Box sx={{ color: "white" }}>
//               <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>Support</Typography>

//               <Box>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Typography>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>exclusive@gmail.com</Typography>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>+88015-88888-9999</Typography>
//               </Box>

//             </Box>
//           </Grid>
//           <Grid>
//             <Box sx={{ color: "white" }}>
//               <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>Account</Typography>

//               <Box>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>My Account</Typography>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>Login / Register</Typography>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>Cart</Typography>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>Wishlist</Typography>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>Shop</Typography>
//               </Box>

//             </Box>
//           </Grid>
//           <Grid>
//             <Box sx={{ color: "white" }}>
//               <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>Quick Link</Typography>

//               <Box>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>Privacy Policy</Typography>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>Terms Of Use</Typography>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>FAQ</Typography>
//                 <Typography sx={{ fontSize: "13px", width: "10pc" }}>Contact</Typography>
//               </Box>

//             </Box>
//           </Grid>
//           <Grid>
//             <Box sx={{ color: "white" }}>
//               <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>Download App</Typography>

//               <Box>
//                 <Typography sx={{ fontSize: "12px", color: "#FAFAFA" }}>Save $3 with App New User Only</Typography>

//                 <Box sx={{ display: "flex", gap: "10px" }}>
//                   <Typography component='img' src={Qrcode}></Typography>

//                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
//                     <Typography component='img' src={googlePlayApp}></Typography>
//                     <Typography component='img' src={appStore}></Typography>
//                   </Box>

//                 </Box>

//               </Box>

//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   )
// }

// export default Footer




import React from 'react';
import { Box, Grid, Typography, TextField, Button, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import logo from '../assest/footer-logo.png'
import Qrcode from '../assest/Qrcode.png'
import appStore from '../assest/app-store.png'
import googlePlayApp from '../assest/google-play-app.png'

const Footer = () => {
  return (

    <Box component="footer" bgcolor="black" color="white">

      <Box px={{ xs: 3, md: 5, lg: 10 }} py={7}>
        <Grid container spacing={4}>

          <Grid item xs={12} md={2}>
            <Typography component='img' src={logo}></Typography>

            <Typography sx={{ mt: 3, fontSize: "17px" }}>Subscribe</Typography>

            <Typography sx={{ mt: 3, color: "#FAFAFA", fontSize: "14px" }}>Get 10% off your first order</Typography>

            {/* <Box component="form" sx={{ mt: 2, display: "flex", border: "1px #FFF solid" }}>
            <TextField
              variant="filled"
              placeholder="Enter your email"
              sx={{
                bgcolor: 'gray.800',
                input: { color: 'white' },
                '& .MuiFilledInput-root': {
                  borderRadius: '4px 0 0 4px',
                },
                fontSize: "14px",
              }}
            />
            <Button
              sx={{ color: 'white', p: 0 }}
            >
              →
            </Button>
          </Box> */}
          </Grid>

          <Grid item xs={12} md={2}>

            <Typography fontSize={"19px"} fontWeight="bold">Support</Typography>

            <Box sx={{ color: "white", display: "flex", flexDirection: "column", gap: 1.3, mt: 2 }}>
              <Typography sx={{ fontSize: "14px" }}>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Typography>
              <Typography sx={{ fontSize: "14px" }}>exclusive@gmail.com</Typography>
              <Typography sx={{ fontSize: "14px" }}>+88015-88888-9999</Typography>
            </Box>

          </Grid>

          <Grid item xs={12} md={2}>

            <Typography fontSize={"19px"} fontWeight="bold">Account</Typography>

            <Box sx={{ color: "white", display: "flex", flexDirection: "column", gap: 1.3, mt: 2 }}>
              <Typography sx={{ fontSize: "14px" }}>My Account</Typography>
              <Typography sx={{ fontSize: "14px" }}>Login / Register</Typography>
              <Typography sx={{ fontSize: "14px" }}>Cart</Typography>
              <Typography sx={{ fontSize: "14px" }}>Wishlist</Typography>
              <Typography sx={{ fontSize: "14px" }}>Shop</Typography>
            </Box>

          </Grid>

          <Grid item xs={12} md={2}>

            <Typography fontSize={"19px"} fontWeight="bold">Quick Link</Typography>

            <Box sx={{ color: "white", display: "flex", flexDirection: "column", gap: 1.3, mt: 2 }}>
              <Typography sx={{ fontSize: "14px" }}>Privacy Policy</Typography>
              <Typography sx={{ fontSize: "14px" }}>Terms Of Use</Typography>
              <Typography sx={{ fontSize: "14px" }}>FAQ</Typography>
              <Typography sx={{ fontSize: "14px" }}>Contact</Typography>
            </Box>

          </Grid>

          <Grid item xs={12} md={2}>

            <Typography fontSize={"19px"} fontWeight="bold">Download App</Typography>

            <Typography sx={{ mt: 1, color: "gray", fontSize: "12px" }}>Save $3 with App New User Only</Typography>

            <Box sx={{ display: "flex", gap: "10px", mt: 1 }}>
              <Typography component='img' src={Qrcode}></Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography component='img' src={googlePlayApp}></Typography>
                <Typography component='img' src={appStore}></Typography>
              </Box>

            </Box>

            <Box display="flex" gap={2} mt={2} color="gray">
              <IconButton href="https://facebook.com" sx={{ color: "inherit", ":hover": { color: "white" } }}>
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" sx={{ color: "inherit", ":hover": { color: "white" } }}>
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" sx={{ color: "inherit", ":hover": { color: "white" } }}>
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" sx={{ color: "inherit", ":hover": { color: "white" } }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

        </Grid>
      </Box>

      <Box sx={{ borderTop: "2px rgba(147, 145, 145, 0.289) solid", display: "flex", justifyContent: "center", py: 3 }}>
        <Typography sx={{ color: "grey", fontSize: "13px" }}>
          © Copyright Rimel 2022. All right reserved
        </Typography>
      </Box>

    </Box>
  );
};

export default Footer;
