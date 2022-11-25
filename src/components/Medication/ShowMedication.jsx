import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

import "./medication.css";

const ShowMedication = ({ toIndex, medication }) => {
  return (
    <Card sx={{ maxWidth: 345 }} class="center" variant="outlined">
      <CardMedia
        component="img"
        alt="prescribed pills"
        height="140"
        image="https://media.istockphoto.com/id/1190193494/photo/prescription-pills.jpg?s=612x612&w=0&k=20&c=8SRnYTlVYjDfDVLQMwRO0alckJqAsF1yXHye259xObQ="
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {medication.brandName}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {medication.genericName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {medication.description}
        </Typography>
        <Typography variant="body2" color="red">
          {medication.adverseEffects}
        </Typography>
      </CardContent>
      <CardActions>

      <Button 
        size="small"
        onClick={toIndex}
        variant="contained"
        color="success"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>

        

      </CardActions>
    </Card>
  );
};

export default ShowMedication;
