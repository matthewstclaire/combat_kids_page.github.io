import React from "react";
import Collapsible from "react-collapsible";
import { useState } from "react";
import Scoring from "../public/scoring.png";

export default function FirstWeeks() {
  return (
    <div className="first-weeks">
      <h1>First Weeks</h1>
      <p>
        Your first weeks at Combat Arts can be intimidating. Stepping into this
        new space can feel overwhelming for both parents and new students. This
        page serves as a tool to help parents and new students understand some
        building blocks of Jiu-Jitsu at Combat Arts. By building confidence in
        these skills students can quickly translate this to other skills. Warm
        ups, basic positioning, and a general idea of scoring will set students
        up for success.
      </p>
      <Collapsible className="collapse" trigger="Tap to Learn About Warm Ups">
        <h2>Warm Ups</h2>
        <p>
          Warm ups are designed to help new students understand basic movements
          within Jiu-Jitsu. Each warm up is a building block that will serve
          students through all belts. It is very important to understand each
          movement and what its eventual use will be.
        </p>
        <h3>Break Falls/Stand Up and Base</h3>
        <p>This is something about the thing</p>
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/NGIh7ALopfM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        <h3>Leg Over Drill</h3>
        <p>A simple and effective way to recover guard.</p>
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h3>Bridge and Upa</h3>
        <p>
          One of the main ways to create space and escape from a mounted
          position.
        </p>
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/ZVeW0-YIiqg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <h3>Bridge and Upa to Forward Roll</h3>
        <p>
          One of the main ways to create space and escape from a mounted
          position.
        </p>
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <h3>Shrimp</h3>
        <p>
          This movement can often feel like the most difficult yet of these
          movements is likely the most important. This is a main way you can
          create space and form escapes from bottom positions.
        </p>
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/4fyMiLey6rI?start=141"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Collapsible>

      <Collapsible
        className="collapse"
        trigger="Tap to Learn About Basic Positions"
      >
        <h2>Basic Positions</h2>
        <p>
          Getting a visual of the positions will be best to understand them.
          This video below is a great starting place.
        </p>
        <iframe
          width="80%"
          height="315"
          src="https://www.youtube.com/embed/36Yv3f8LgsA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Collapsible>

      <Collapsible
        className="collapse"
        trigger="Tap to Learn About Jiu-Jitsu Scoring"
      >
        <h2>Scoring in Jiu-Jitsu</h2>
        <p>
          Competing in Jiu-Jitsu is one of the things that makes it so great.
          Competitions are safe and fun ways to push yourself in the sport. If
          your child is interested in competiting here is breakdown of the basic
          ways to score in Jiu-Jitsu. It can become complicated, but at this
          point having a general understanding of where points are scored can be
          very beneficial.
        </p>
        <img className="scoring-img" src={Scoring}></img>
      </Collapsible>
    </div>
  );
}
