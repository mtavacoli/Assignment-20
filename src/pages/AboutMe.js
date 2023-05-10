import React from "react";
import "../pages";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import ProfilePic from
export default function AboutMe() {
  return (
    <div>
      <div>
        <div className="aboutMe aboutMeContainer">
          <img
            src={ProfilePic}
            className="profile-picture"
            alt="profile"
            style={{
              paddingTop: "35px",
            }}
          />
          <p
            className="aboutMe text"
            style={{
              paddingTop: "35px",
              fontSize: "20px",
            }}
          >
            Hello, my name is Matin, and I am a full stack web developer.
          </p>
          <br />
            You are welcome to look around.
            <br />
            Email me at mtavacoli33@gmail.com
            <br />
            <span>
              <a href="https://github.com/mtavacoli">GitHub {"   "} </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/matin-tavacoli-243350234/">
                LinkedIn {"   "}
              </a>
            </span>
            <span>
              <a href="">
                CV{"   "}
              </a>
            </span>
            <br />
          </p>
        </div>
        <MDBCard
          alignment="center"
          className="myBackgroundcard w-auto p-3 text-start"
        >
          <MDBCardHeader>Let's work together</MDBCardHeader>
          <MDBCardBody style={{ backgroundColor: "#F2FCFA" }}>
            <MDBCardTitle>My Background</MDBCardTitle>
            <MDBCardText className="myBackgroundText">
            User-minded Full-Stack Web Developer who prioritizes usability and adaptability in projects. Responsible student with good judgment, time management and a flexible schedule. Aiming to learn and leverage my abilities to successfully fill the vacancy at your company. Frequently praised as hardworking by my peers, I can be relied upon to help your company achieve its goals.
            <br />
              <br />
              If I'm not coding, I enjoy spending time with family and friends, going to the gym, playing soccer, and running around with my dog Benji.
              </MDBCardText>
            <MDBBtn href="#portfolio">My Apps</MDBBtn>
          </MDBCardBody>
          <MDBCardFooter className="text-muted"></MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
}