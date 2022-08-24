import React, { useState } from "react";
import Blackbelt from "../src/blackbelt.png";

export default function WhiteCurriculum(props) {
  return (
    <div>
      <h1>White to Grey Curriculum</h1>
      <img className="blackbelt-img" src={Blackbelt} alt="blackbelt" />
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vT9CM-CQjLJsMlWZUqoqOIC2Cu5H3rUinRZSIE_ehBMo6Z4OiOhu1RrDUgQonlqJAJItSJFyvxfkoT0/pub?embedded=true"
        frameBorder="0"
        scrolling="auto"
        height="500px"
        width="100%"
      ></iframe>
    </div>
  );
}
