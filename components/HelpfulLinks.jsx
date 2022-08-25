import React from "react";
import Blackbelt from "../src/blackbelt.png";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import data from "../data/data.js";

export default function HelpfulLinks() {
  const cardData = data.map((data) => {
    return (
      <div className="helpful-links-list">
        <p>{data.title}</p>
        <button className="button3">
          <a href={data.link}>{data.buttonText}</a>
        </button>
      </div>
    );
  });

  return (
    <div className="helpful-links">
      <h1>Helpful Links</h1>
      <img className="blackbelt-img" src={Blackbelt} alt="blackbelt" />
      <p>
        The world of Jiu-Jitsu is nothing short of incredible. There is much to
        learn for parent and children. Below are some links to help guide you on
        the journey.
      </p>

      {cardData}
    </div>
  );
}
