import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import "./journal.css";

const ShowJournal = ({ toIndex, journal }) => {
  // console.log(journal);
  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
    },
  }));

  const customIcons: {
    [index: string]: {
      icon: React.ReactElement,
      label: string,
    },
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: "Very Satisfied",
    },
  };

  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  return (
    <Card sx={{ maxWidth: 345 }} class="center" variant="outlined">
      <CardMedia
        component="img"
        alt="journal next to cup of coffee"
        height="140"
        image="https://t4.ftcdn.net/jpg/01/22/26/87/360_F_122268757_i4STsMT7Cp3PJkUcMT4LWdnUTXj9sEXR.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {journal.content}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          Prescriptions: {journal.prescriptions}
        </Typography>
        <Typography variant="body2" color="red">
          Side Effects: {journal.sideEffects}
        </Typography>
        <Typography variant="body2" color="red">
          <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value: number) => customIcons[value].label}
            highlightSelectedOnly
          />
        </Typography>
        <Typography variant="body2" color="red">
          Pain Level: {journal.painLevel}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={toIndex}>
          Back
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShowJournal;
