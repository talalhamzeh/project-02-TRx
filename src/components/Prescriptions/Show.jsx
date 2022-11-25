import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";



const Show = ({ prescription, toShow, toIndex }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>


  );
  console.log(prescription)
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }} class="center" variant="outlined">
        <CardMedia
          component="img"
          alt="doctor writing prescription"
          height="140"
          image="https://i.ibb.co/QjWP0Dx/doctorprescription.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {prescription.drug_name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Daily Dosage:
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {prescription.daily_dosage}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Daily Strength:
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {prescription.dosage_history}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Number of Refills:
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {prescription.dose_strength}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Daily Dosage:
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {prescription.daily_dosage}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Doses per Refill:
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {prescription.dose_strength}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Refill Date:
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {prescription.refill_date}
          </Typography>
        </CardContent>
        <CardActions>
         
          <div>
             <Button 
              size="small"
              onClick={toIndex}
              variant="contained"
              color="success"
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>

            </div>





        </CardActions>
      </Card>
    </Box>
    // <div key={prescription.div}>
    //   <ul> Daily Dosage : {prescription.daily_dosage} </ul>
    //   <ul> Daily Strength :{prescription.dose_strength} </ul>
    //   <ul> Number of refills :{prescription.refills} </ul>
    //   <ul> Dail Doses :{prescription.daily_dosage} </ul>
    //   <ul> Doses per refill :{prescription.dose_strength} </ul>
    //   <ul>Refill Date :{prescription.refill_date} </ul>
    // </div>
  );
};
export default Show;
