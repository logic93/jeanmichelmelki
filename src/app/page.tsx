"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline()
      .add("intro-text-start")
      .to(
        ".intro__name",
        {
          transform: "translateY(0%)",
          opacity: 1,
          duration: 0.4,
          ease: "power3.inOut",
        },
        "intro-text-start"
      )
      .to(
        ".intro__role",
        {
          transform: "translateY(0%)",
          opacity: 1,
          duration: 0.4,
          ease: "power3.inOut",
        },
        "intro-text-start"
      )
      .to(".nav", { opacity: 1, duration: 0.8, ease: "power1.out" }, ">");

    gsap.matchMedia().add("(min-width: 769px)", () => {
      gsap
        .timeline({
          defaults: { ease: "power1.out" },
          scrollTrigger: {
            trigger: ".page__intro",
            start: "100",
            toggleActions: "play pause none reverse",
          },
        })
        .to(".nav__logo", { top: "20px", left: "20px" }, "<")
        .to(".nav__contact", { top: "20px", right: "20px" }, "<")
        .to(".nav__contact-info", { bottom: "20px", left: "20px" }, "<")
        .to(".nav__progress", { bottom: "20px", right: "20px" }, "<")
        .duration(0.2);
    });
  }, []);

  return (
    <div>
      <div className="nav">
        <div className="nav__logo">
          <a href="/" onClick={(e) => e.preventDefault()}>
            <p>JM.</p>
          </a>
        </div>

        <div className="nav__contact">
          <a href="mailto:jeanmelki1@gmail.com">
            <p>Contact</p>
          </a>
        </div>

        <div className="nav__contact-info">
          <p>
            Göteborg, Sverige
            <br />
            jeanmelki1@gmail.com – +46 772 88 08 32
          </p>
        </div>

        <div className="nav__progress">
          <svg className="svg-indicator">
            <circle className="svg-indicator-track" />
            <circle className="svg-indicator-indication" />
          </svg>
        </div>
      </div>

      <section>
        <div className="page page__intro">
          <div className="intro">
            <h1 className="intro__name">Jean-Michel Melki</h1>
            <p className="intro__role">Frontend Developer</p>
          </div>
        </div>

        <div className="page page__about-me">
          <h1>About Me</h1>
        </div>

        <div className="page page__experience">
          <h1>Experience</h1>
        </div>

        <div className="page page__contact-details">
          <h1>Contact</h1>
        </div>
      </section>
    </div>
  );
}
