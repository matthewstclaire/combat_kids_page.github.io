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

      <div className="helpful-links-list">
        <p>A brief history of Jiu-Jitsu</p>
        <button className="button3">
          <a href="https://www.greenwichjiujitsu.com/history-of-jiu-jitsu">
            History Lesson
          </a>
        </button>

        <p>Jiu-Jitsu at the highest of levels.</p>
        <button className="button4">
          <a href="https://www.youtube.com/watch?v=XcI8ct3Ifik">
            Watch It Here
          </a>
        </button>

        <p>
          IBJJF Graduation System will explain in depth what promotions entail.
        </p>
        <button className="button3">
          <a href="https://ibjjf.com/graduation-system">Graduation System</a>
        </button>

        <p>
          The IBJJF Rule Book will give you detailed explanation of the rules.
          They can be complicated!
        </p>
        <button className="button4">
          <a href="https://ibjjf.com/books-videos">IBJJF Rulebook</a>
        </button>

        <p>
          This article was written by a woman starting Jiu-Jitsu later in life.{" "}
        </p>
        <button className="button1">
          <a href="https://www.buzzfeed.com/nataliakrslovic/taking-up-brazilian-jiu-jitsu">
            Her Story Here
          </a>
        </button>

        <p>
          This is an article written by Yahoo discussing reasons why Jiu-Jitsu
          is great for kids.
        </p>
        <button className="button2">
          <a href="https://sg.news.yahoo.com/4-reasons-why-brazilian-jiu-jitsu-is-one-of-the-best-martial-arts-for-kids-013025041.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAJ4TsPkJT0aDv6mUDFs5fTebS9EwaYjBLc_-d_QLYeHxjrXzmiDQIQT2-7wIBkO9E4bRZSKqmRAaqdKRZkuym5XD4sKRq815wbhq87ja3SEbtafNzRShTyCCvzU3oUTyudrFj9vSEMiArtyoR3k8l8gRPbpws6rwkJZ9jZbzO_yI">
            Benefits for Kids
          </a>
        </button>
      </div>
    </div>
  );
}
