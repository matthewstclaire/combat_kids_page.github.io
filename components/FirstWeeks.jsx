import React from "react";
import Collapsible from "react-collapsible";
import { useState } from "react";
import Scoring from "../src/scoring.png";
import Blackbelt from "../src/blackbelt.png";
import Belts from "../src/Kids-Belt-Ranking.png";

export default function FirstWeeks() {
  return (
    <div className="first-weeks">
      <h1>First Weeks</h1>
      <img className="blackbelt-img" src={Blackbelt} alt="blackbelt" />
      <p>
        Your first weeks at Combat Arts can be intimidating. Stepping into this
        new space can feel overwhelming for both parents and new students. This
        page serves as a tool to help parents and new students understand some
        building blocks of Jiu-Jitsu at Combat Arts.
      </p>

      <p>
        By increasing confidence in these skills students can quickly translate
        the fundamentals to other more advanced skills. Warm ups, basic
        positioning, and a general idea of scoring will set students up for
        success.
      </p>
      <Collapsible className="collapse" trigger="Warm Ups">
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
          allowFullScreen
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
          allowFullScreen
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
          allowFullScreen
        ></iframe>
      </Collapsible>

      <Collapsible className="collapse" trigger="Basic Positions">
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
          allowFullScreen
        ></iframe>
      </Collapsible>

      <Collapsible className="collapse" trigger="Jiu-Jitsu Scoring">
        <p>
          Competing in Jiu-Jitsu is one best aspects of the sport. Competitions
          are safe and fun ways to test yourself. If your child is interested in
          competiting here is breakdown of the basic ways to score in Jiu-Jitsu.
          It can become complicated, but at this point having a general
          understanding of where points are scored can be very beneficial.
        </p>
        <img className="scoring-img" src={Scoring}></img>
        <p>
          Matches are timed and if no submission has taken place then the match
          will be decided by which competitor scored the most points.
        </p>
      </Collapsible>

      <Collapsible className="collapse" trigger="The Belt System">
        <p>
          At Combat Arts students progress through the kids belt system. From
          white to grey students will receive one stripe for every 5 classes.
          Once grey is obtained it will slow to 1 stripe for every 10 classes.
        </p>
        <img src={Belts} className="belts-img" />
      </Collapsible>
    </div>
  );
}
