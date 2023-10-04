import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { Card, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

// Path: /home (when not logged in)

function LandingPage() {
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="container">
      <img
        src="https://thumb.tildacdn.com/tild3130-3239-4066-a230-373164373863/-/resize/778x/-/format/webp/Untitled_design_12_1.png"
        height={250}
        style={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}
      ></img>

      <div style={{ position: "absolute", right: 40, top: 120 }}>
        <h4>Already a Member?</h4>
        <Button
          style={{ position: "absolute", right: 10 }}
          color="success"
          variant="contained"
          autoFocus
          onClick={onLogin}
        >
          Login
        </Button>
      </div>
      <h2></h2>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <Card
            elevation={24}
            sx={{
              margin: "auto",
              marginTop: -7,
              marginBottom: 6,
              maxWidth: 340,
              minWidth: 280,
              backgroundColor: "beige",
              borderRadius: 3,
            }}
            onClick={() => {
              history.push("/getmoreinfo");
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                src="https://thumb.tildacdn.com/tild3139-3131-4538-b831-613333356461/-/format/webp/pic4.jpeg"
                alt="Wugs Services"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Learn More
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  See which Wugs service is right for your space. Whether it's
                  Micro-Markets, Smart Coolers, or Snack Boxes, Wugs could be
                  the perfect upgrade to your food and beverage needs. Click
                  here to get more details.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            elevation={24}
            sx={{
              margin: "auto",
              marginTop: -7,
              maxWidth: 340,
              minWidth: 280,
              backgroundColor: "beige",
              borderRadius: 3,
            }}
            onClick={() => {
              history.push("/priming");
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                src="https://thumb.tildacdn.com/tild6665-3033-4534-b666-316131636265/-/resize/576x/-/format/webp/Screen_Shot_2023-02-.png"
                alt="Wugs On-Boarding Portal"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Get Snacking
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  With our new streamlined on-boarding process, adding Wugs to
                  your space has never been easier. With this all-in-one
                  process, you can now revolutionize your snacking space in less
                  time than ever. Click here to get started!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
