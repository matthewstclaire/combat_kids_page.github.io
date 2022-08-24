import React from "react";
import Blackbelt from "../src/blackbelt.png";
import { Document, Page } from "react-pdf";
import { useState } from "react";

export default function HelpfulLinks() {
  return (
    <div className="helpful-links">
      <h1>Helpful Links</h1>
      <img className="blackbelt-img" src={Blackbelt} alt="blackbelt" />
      <p>
        The world of Jiu-Jitsu is nothing short of incredible. There is much to
        learn for parent and children. Below are some links to help guide you on
        the journey.
      </p>
    </div>
  );
}
