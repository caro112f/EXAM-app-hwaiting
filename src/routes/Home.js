import heroImg from "../images/splash_img.webp";
import girlPink from "../images/girl-pink.webp";
import glowSticks from "../images/glow-sticks.webp";
import koncert from "../images/koncert.webp";
import boyBlue from "../images/boy-blue.webp";
import foodTruck from "../images/food-truck.webp";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Footer from "../components/Footer";

export default function Home() {
  const landingHeadingRef = useRef();
  const landingButtonsRef = useRef();
  const artistButtonRef = useRef();
  const programButtonRef = useRef();
  const buyButtonRef = useRef();
  useEffect(() => {
    let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    const heading = landingHeadingRef.current;
    const buttons = landingButtonsRef.current;
    /*      const aButton = artistButtonRef.current;
     const pButton = programButtonRef.current;
     const bButton = buyButtonRef.current; */
    //tl.from(heading, { opacity: 0 });
    tl.to(heading, { duration: 1, opacity: 1 });
    tl.to(heading, {
      duration: 0.5,
      textShadow: "0px 0px 18px #aa53ff",
    });
    tl.to(heading, {
      duration: 0.2,
      textShadow: "0px 0px 0px #aa53ff",
    });
    tl.to(heading, {
      duration: 0.2,
      textShadow: "0px 0px 18px #aa53ff",
    });
    tl.to(heading, {
      duration: 0.2,
      textShadow: "0px 0px 0px #aa53ff",
    });
    tl.to(heading, {
      duration: 0.2,
      textShadow: "0px 0px 18px #aa53ff",
    });
    //tl.to(buttons, { duration: 0.1, opacity: 0, delay: 0.2 });
    tl.to(buttons, { duration: 0.6, opacity: 1 });
    // tl.to(aButton, {
    //   duration: 0.2,
    //   boxShadow: "0px 0px 8px #5affff",
    // });
    // tl.to(
    //   pButton,
    //   {
    //     duration: 0.2,
    //     boxShadow: "0px 0px 8px #fc61ff",
    //   },
    //   "<"
    // );
    // tl.to(
    //   bButton,
    //   {
    //     duration: 0.2,
    //     boxShadow: "0px 0px 8px #88ff6b",
    //   },
    //   "<"
    // );
  });

  return (
    <>
      <main id="main-landing">
        <header
          id="header-landing"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <h1 className="invis" ref={landingHeadingRef}>
            HWAITING FESTIVAL
          </h1>
          {/* <p id="home-p">
            {" "}
            <i>"Scandinavias biggest K-Pop Festival!"</i>{" "}
          </p> */}
          {/*      <img src={heroImg} alt="BigCo Inc. logo" /> */}
          <div ref={landingButtonsRef} className="invis" id="landing-buttons">
            <Link
              ref={artistButtonRef}
              id="artist-button"
              className="landing-button"
              to="/artists"
            >
              See Artists
            </Link>
            <Link
              ref={programButtonRef}
              id="program-button"
              className="landing-button"
              to="/program"
            >
              See Program
            </Link>
            <a
              ref={buyButtonRef}
              id="buy-button"
              className="landing-button"
              href="https://exam-booking-hwaiting.detblaarum.dk/"
              target="_blank"
              rel="noreferrer"
            >
              Buy Tickets
            </a>
          </div>
          <a href="#highlight-section">
            <ArrowDownOutlined id="arrowdown" />
          </a>
          {/* <Link to="#highlight-section"></Link> */}
        </header>

        <section id="home-divider">
          <p>화이팅</p> <p>HWAITING</p> <p>화이팅</p> <p>HWAITING</p>{" "}
          <p>화이팅</p>
        </section>
        <section id="highlight-section">
          <h2 id="landing-h2">
            Scandinavias biggest{" "}
            <span id="big">
              {" "}
              <br /> K-Pop music festival!
            </span>
          </h2>
          <h3 id="landing-h3">2021 Highlights</h3>
          <hr />
          <div className="picture-wrapper">
            <img id="girl-img" src={girlPink} alt="girl with fire stick" />
            <img id="glowsticks-img" src={glowSticks} alt="glow sticks" />
            <img
              id="koncert-img"
              src={koncert}
              alt="concert with colorful smoke"
            />
            <img id="boy-img" src={boyBlue} alt="boy smiling at concert" />
            <img
              id="foodtruck-img"
              src={foodTruck}
              alt="food truck at concert"
            />
          </div>
        </section>
      </main>
      <Footer style={{ marginTop: "10rem" }}></Footer>
    </>
  );
}
