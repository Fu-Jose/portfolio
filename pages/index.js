import React, { useState } from "react";
import Head from "next/head";
import Particles from "react-tsparticles";

export default function Home() {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    const particles = document.getElementsByTagName("canvas");
    particles[0].style.top = "54px";
    console.log(particles[0].style.top);
  };
  return (
    <>
      <Head>
        <title>Juan Fu Web Developer</title>
        <meta name="description" content="Juan Fu Web Developer" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></script> */}
      </Head>
      <header className="sticky-top">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid justify-content-around">
            <div className="home-btn">
              <box-icon
                type="solid"
                name="home"
                style={{ verticalAlign: "middle" }}
                onClick={() => {
                  document
                    .getElementById("start")
                    .scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                document
                  .getElementById("about-me")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Me
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                document
                  .getElementById("work")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Work
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              Contact
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section id="start">NEW</section>
        <section
          id="about-me"
          className="row mx-auto align-items-center align-content-around"
        >
          <div className=" text-center mt-3">
            <h2>About Me</h2>
          </div>
          <div className="d-flex mx-auto col-lg-6 justify-content-around">
            <div className="d-flex flex-column align-self-center mx-4">
              <div className="text-center my-3">
                <div>
                  {/* <Image
                  className="avatar"
                  src={avatar}
                  alt="picture of Juan"
                  width={120}
                  height={120}
                /> */}
                  <img
                    className="avatar"
                    src="https://res.cloudinary.com/donxjonx/image/upload/v1637598838/foto3_ykzrmv.jpg"
                  />
                </div>
              </div>
              <div className="my-3 text-center">
                <h5>Hi! My name is Juan and I'm a MERN Developer.</h5>
              </div>
              <div className="my-3 mx-lg-5">
                <span>
                  Sometimes a client's request may sound like a puzzle or
                  gibberish. I play chess and speak four languages. <br />
                  Currently working on the online presence of a South-American
                  textile importer.
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex mx-auto col-lg-6 justify-content-around">
            <div className="d-flex flex-column align-self-center">
              <div className="d-flex my-2">
                <div className="align-self-center">
                  <box-icon name="world" />
                </div>
                <span className="mx-2">- Rome, Italy</span>
              </div>
              <div className="d-flex my-2">
                <div className="align-self-center">
                  <box-icon name="user-voice" />
                </div>
                <span className="mx-2">
                  - Fluent in: Spanish, English and Italian. <br />- Working on:
                  French.
                </span>
              </div>
              <div className="d-flex my-2">
                <div className="align-self-center">
                  <box-icon type="solid" name="school"></box-icon>
                </div>
                <span className="mx-2">
                  - Liceo Scientifico Applied Sciences
                  <br />- Strive School Full Stack Course
                </span>
              </div>
              <div className="d-flex my-5">
                <button type="button" className="btn btn-light mx-auto">
                  Curriculum
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="work"
          className="row mx-auto align-items-center align-content-around"
        >
          <div className=" text-center mt-3">
            <h2>Projects</h2>
          </div>
          <div className="d-flex mx-auto col-lg-6 justify-content-around">
            <div className="p-3">
              <img
                src="https://res.cloudinary.com/donxjonx/image/upload/v1639398239/cav-frame_hnq72m.png"
                className="img-fluid"
                style={{ maxWidth: "400px" }}
              />
            </div>
          </div>
          <div className="row mx-auto col-lg-6 justify-content-around">
            <h3 className="text-center">Cavalieri Suits</h3>
            <div className="my-3">
              <span>
                The online presence for Cavalieri Suits, a South American
                textile importer.
              </span>
              <ul className="my-2">
                <strong>FEATURES:</strong>
                <li>Responsive Design</li>
                <li>Admin Dashboard (CRUD)</li>
                <li>PayPal Checkout </li>
                <li>Cart</li>
                <li>Emailing</li>
                <li>Chat Support</li>
                <li>User authentication</li>
                <li>Order status and history</li>
                <li>Taxes and shipping calc</li>
              </ul>
              <div className="text-center mt-3">
                <a
                  className="btn btn-light"
                  href="https://cavalierisuits.herokuapp.com/"
                  target="_blank"
                >
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="row mx-auto align-items-center align-content-around"
        >
          <div className="bg-light">dsa</div>
        </section>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#A0AECD",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 0,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </main>
    </>
  );
}
