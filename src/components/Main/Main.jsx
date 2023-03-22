import React from "react";
import { Section, Left, Right } from "./Main.styled";
import Lottie from "lottie-react";
import spaceman from "../spaceman.json";
import { Typewriter } from 'react-simple-typewriter'


const Main = () => {
  return (
    <>
      <Section>
        <Left>
          <h2>
            Movies and Shows <br /> Api Project
          </h2>
          <h3>
            {" "}
            <Typewriter
              words={["React Project"]}
              loop={999}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </h3>
        </Left>
        <Right>
          <Lottie animationData={spaceman} loop={true} id="spaceman" />
        </Right>
      </Section>
    </>
  );
};

export default Main;
