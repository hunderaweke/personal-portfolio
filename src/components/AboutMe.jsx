import { Container } from "react-bootstrap";
import style from "./aboutme.module.css";
function AboutMe({ theme }) {
  return (
    <>
      <Container
        fluid
        className={`d-flex ${theme === "dark" ? "bg-dark text-bg-dark " : ""}`}
        id="about"
      >
        <Container className={`d-flex font-monospace`}>
          <div className={`p-5`}>
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              fugiat tenetur eveniet debitis consequuntur assumenda ullam
              adipisci ut quia, ipsa eius? Possimus ratione inventore natus
              dolor aliquam similique voluptate quibusdam eius sequi.
              Exercitationem, fugiat eum. Quaerat distinctio sed veniam aliquid
              ipsam consectetur. Dolorem quae iure, voluptate sunt reprehenderit
              quisquam suscipit aperiam? Nisi vel quas laboriosam consequuntur
              molestiae consequatur, voluptatibus eum soluta minus quaerat
              dolorum quo ullam porro quam esse fuga aliquam recusandae eaque
            </p>
          </div>
        </Container>
      </Container>
    </>
  );
}
export default AboutMe;
