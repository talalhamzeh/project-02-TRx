import React from "react";
import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "../Login/firebase";
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
import "./home.css";

const HomePage = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [journals, setJournals] = useState([]);
  const [medications, setMedications] = useState([]);
  const currentUser = useAuth();

  const getUIDPList = async () => {
    const prescriptionsCollectionRef = collection(db, "Prescriptions");
    const q = query(
      prescriptionsCollectionRef,
      where("UID", "==", currentUser.uid)
    );
    console.log(q);
    const querySnapshot = await getDocs(q);
    const qArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      qArray.push(doc.data());
      console.log(doc.id, " => ", doc.data());
      //
    });
    console.log(qArray);
    setPrescriptions(qArray.map((doc) => ({ ...doc })));
  };

  const getUIDJList = async () => {
    const journalsCollectionRef = collection(db, "Journal");
    const q = query(journalsCollectionRef, where("UID", "==", currentUser.uid));
    const querySnapshot = await getDocs(q);
    const qArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      qArray.push(doc.data());
      console.log(doc.id, " => ", doc.data());
      //
    });
    setJournals(qArray.map((doc) => ({ ...doc })));
  };

  const getMedications = async () => {
    const medicationsCollectionRef = collection(db, "Medications");
    const data = await getDocs(medicationsCollectionRef);

    setMedications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUIDPList();
    getUIDJList();
    getMedications();
  }, [currentUser]);

  if (!currentUser) {
    return (
      <p>
        TRx (pronounced Tracks) is a prescription tracking website, where you
        can log current prescriptions and their histories. You may also write
        journal entries to describe your experiences on your prescriptions and
        any side effects you may be experiencing. Below, you can see a sample of
        our medication library that describes common medications and common
        adverse effects / warnings. <hr />
        <p>
          <img
            src="https://anglicaresa.com.au/wp-content/uploads/older_people-745x398.jpg"
            class="image"
            alt="an old woman and man"
          ></img>
        </p>
        <hr />
        <div class="homejournals">
          {medications.map((medication) => {
            return (
              <Card sx={{ maxWidth: 200 }} variant="outlined">
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    class="text-truncate"
                  >
                    {medication.description}
                  </Typography>
                  <Typography variant="body2" color="red" class="text-truncate">
                    {medication.adverseEffects}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </p>
    );
  }

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
    <div class="container ">
      <div>
        {" "}
        <h1 class="userheading"> Welcome back: {currentUser?.displayName} </h1>
      </div>
      <h1 class="journalheading">Prescriptions:</h1>
      {prescriptions.map((prescription) => {
        return (
          <div key={prescription.div}>
            <h2 class="prescriptionheading">{prescription.drug_name} </h2>
          </div>
        );
      })}
      <p>
        <h1 class="journalheading">Journals:</h1>
        <div class="homejournals">
          {journals.map((journal) => {
            return (
              <Card sx={{ maxWidth: 200 }} variant="outlined">
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
                <CardActions></CardActions>
              </Card>
            );
          })}
        </div>
      </p>
    </div>
  );
};

export default HomePage;
