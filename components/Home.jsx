import React from "react";
import KidsLogo from "../public/for-kids.png";
import Group from "../public/group.png";

export default function Home() {
  return (
    <div className="home">
      <img className="kids-logo" src={KidsLogo}></img>
      <p>
        Welcome to the Combat Arts Kids page. This was designed to help new
        parents and students get comfortable with their early experiences at
        Combat Arts.
      </p>
      <p>
        Here you will find videos and links to learn more about what to expect
        when getting started. It can be an extremely nerve-wracking experience
        starting out, but we know once you and your child get through the
        introductions and initial awkwardness you both will have found a
        lifelong hobby.
      </p>
      <img src={Group} className="group-photo"></img>
      <br />
      <small>
        Lining up by rank is a longstanding tradition and how all classes at
        Combat Arts are started.
      </small>
    </div>
  );
}
