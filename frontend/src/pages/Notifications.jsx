import {
 Box,
 Paper,
 Typography
} from "@mui/material";

export default function Notifications(){

 return(

  <Box
   sx={{
    minHeight:"100vh",
    bgcolor:"#041229",
    p:3
   }}
  >

   <Paper
    sx={{
     p:3,
     bgcolor:"#0c1c3d",
     color:"white"
    }}
   >

    <Typography variant="h5">
      Notifications
    </Typography>

    <Typography mt={2}>
      Aman liked your post
    </Typography>

    <Typography mt={2}>
      Rahul followed you
    </Typography>

    <Typography mt={2}>
      Priya commented on your photo
    </Typography>

   </Paper>

  </Box>

 );
}