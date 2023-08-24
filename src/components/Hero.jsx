import heroPicBg from "../assets/img/pic-bg-vector.svg";
import Container from "react-bootstrap/Container";
import { TypeAnimation } from "react-type-animation";
import { Button } from "react-bootstrap";
import style from "./hero.module.css";

function Hero({ theme }) {
  return (
    <>
      <Container
        fluid
        id="home"
        className={`pb-sm-5  ${theme === "dark" ? "bg-dark text-white" : ""}`}
      >
        <Container
          className={`w-100 flex-wrap d-flex gap-lg-5 justify-content-evenly   align-content-center ${style.fluidHeight}`}
        >
          <div className="flex-item position-relative">
            <img src={heroPicBg} alt="" className={`${style.heroBg}`} />
          </div>
          <div className="flex-item font-monospace w-50">
            <h3>I am Hundera Awoke</h3>
            <h1 className={`${style.skillsTyper}`}>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "A Web Developer",
                  1000,
                  "A Graphics Designer",
                  1000,
                  "A Telegram Bot Developer",
                  1000,
                  "A Django Developer",
                  1000,
                ]}
                repeat={Infinity}
                style={{ height: "200%" }}
              ></TypeAnimation>
            </h1>
            <p className="text-wrap">
              I am a dedicated web developer with high level of skill and
              experience with many satisfied customers and companies by my work.
            </p>
            <Container className="d-flex justify-content-center gap-5 ">
              <Button className="rounded-5 px-5 py-3 bg-secondary">
                Download CV
              </Button>
              <Button className="rounded-5 px-5 py-3 bg-secondary">
                Mail Me
              </Button>
            </Container>
          </div>
          <div
            className={`flex-item d-lg-flex d-none flex-column justify-content-center gap-5 ${style.iconsContainer} `}
          >
            <a
              href=""
              className={`${theme === "dark" ? "text-white-50 " : ""}`}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href=""
              className={`${theme === "dark" ? "text-white-50 " : ""}`}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href=""
              className={`${theme === "dark" ? "text-white-50 " : ""}`}
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href=""
              className={`${theme === "dark" ? "text-white-50 " : ""}`}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </Container>
      </Container>
    </>
  );
}
export default Hero;
