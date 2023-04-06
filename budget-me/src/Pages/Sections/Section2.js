import React, { useEffect } from "react";
import {
  ContentSectionContainer,
  ContentSectionWrapper,
  ContentSectionPhoto,
  ContentSectionText,
  ContentH1,
  ContentP,
  Div,
} from "./Section2d";
import "aos/dist/aos.css";
import Aos from "aos";
import Icon from "../../Images/image14.png";

const Section2 = () => {
  useEffect(() => {
    Aos.init({ duration:2000 });
  }, []);
  return (
      <Div data-aos="fade-up" id="download">
    <ContentSectionContainer >
      <ContentSectionWrapper>
        <ContentSectionText>
          <ContentH1>Why Student budgeting App?</ContentH1>
          <ContentP>
          A student budgeting app is essential and beneficial for various reasons. Primarily, it helps students gain financial literacy and develop responsible spending habits early in their lives. By providing an organized platform to track income, expenses, and savings goals, the app enables students to manage their finances effectively and minimize unnecessary expenditures. Furthermore, a student budgeting app can alleviate the stress of dealing with financial challenges, such as student loans and tuition fees, by offering tailored suggestions and guidance on debt repayment and planning. This empowers students to make informed decisions and stay in control of their finances, fostering a sense of security and independence. Overall, a student budgeting app is a crucial tool in establishing a strong financial foundation, leading to a more sustainable and successful academic and professional life.
          </ContentP>
        </ContentSectionText>
        <ContentSectionPhoto src={Icon} />
      </ContentSectionWrapper>
    </ContentSectionContainer>
    </Div>
  );
};

export default Section2;