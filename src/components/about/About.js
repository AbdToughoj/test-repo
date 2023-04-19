import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./About.css";
import teamInfo from "./teamInfo.json";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div className="container customPadding">
      <div className="mission_statement">
        <h1 className="head">About Us</h1>
        <p>{teamInfo.missionStatement}</p>
      </div>
      <hr></hr>
      <div>
        <h1>Our Team</h1>
        <div className="our-team-container">
          {teamInfo.teamMembers.map((member, index) => (
            <Card key={index} className={`mb-4 customCard `}>
              <div container className="card-body-container">
                <Card.Img className="img" src={member.image} />
                <p className="mt-2 field"> {member?.field}</p>
                <div className="custom-card-body">
                  <Card.Title>
                    <div className="member">{member.name}</div>
                  </Card.Title>
                  <div className="card-content">
                    <Card.Footer>
                      <small>
                        <div className="Skills">Skills:</div>
                        {member.skills}
                      </small>
                    </Card.Footer>
                    <div className="ms-2">
                      <BsFacebook size={30} className="socialMediaIcon" />
                      <AiFillTwitterCircle
                        size={36}
                        className="socialMediaIcon"
                      />
                      <BsGithub size={30} className="socialMediaIcon" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
