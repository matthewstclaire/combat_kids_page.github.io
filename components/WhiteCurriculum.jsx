import React from "react";
import Blackbelt from "../src/blackbelt.png";
import Footer from "./Footer";

export default function WhiteCurriculum(props) {
  return (
    <div>
      <h1>White to Gray Curriculum</h1>
      <img className="blackbelt-img" src={Blackbelt} alt="blackbelt" />

      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vT9CM-CQjLJsMlWZUqoqOIC2Cu5H3rUinRZSIE_ehBMo6Z4OiOhu1RrDUgQonlqJAJItSJFyvxfkoT0/pub?embedded=true"
        frameBorder="1px"
        scrolling="auto"
        height="400px"
        width="95%"
      />

      <p>Tap the button below for a printable link.</p>
      <button className="print-button">
        <a href="https://docs.google.com/document/d/e/2PACX-1vT9CM-CQjLJsMlWZUqoqOIC2Cu5H3rUinRZSIE_ehBMo6Z4OiOhu1RrDUgQonlqJAJItSJFyvxfkoT0/pub">
          Printable Link
        </a>
      </button>
      {/* <Footer /> */}
    </div>
  );
}
