import styled from "styled-components";
import {Link} from 'react-router-dom'
export const ContentSectionContainer = styled.section`
margin-bottom: 70px;

  display: grid;
  z-index: 1;
  height: 600px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 830px) {
    display: block;
    justify-content: center;

  }
 
`;
export const ContentSectionWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 830px) {
    display: block;
    margin-top: 100px;
    margin-bottom: 100px;


  }
`;
export const ContentSectionPhoto = styled.img`
  width: 250px;
  height: 500px;
  margin-top: 200px;
  @media screen and (max-width: 830px) {
    position: relative;
    left: 120px;
    bottom: 50px;
    transition: 0.2s ease-in-out;
    width: 170px !important;
    height: 360px !important;
        text-align: center;

  }
  @media screen and (max-width: 400px) {
    position: relative;
    left: 80px;
    bottom: 50px;
    transition: 0.2s ease-in-out;
    width: 170px !important;
    height: 360px !important;
        text-align: center;

  }
  @media screen and (max-width: 360px) {
    margin-left: 50px;
    transition: 0.2s ease-in-out;
    width: 250px !important;
    height: 300px !important;
  }
`;
export const ContentSectionText = styled.div`
`;
export const ContentH1 = styled.h1`
  font-size: 25px;
  color: #E93A7D;
  max-width: 500px;
  @media screen and (max-width: 830px) {
    transition: 0.2s ease-in-out;
    display: flex;
    align-items: center;
    text-align: center;

    justify-content: center;
  }
`;
export const ContentP = styled.p`
  font-weight: 500;
  color: black;
  max-width: 400px;
  position: relative;
  @media screen and (max-width: 830px) {

    transition: 0.2s ease-in-out;
    display: flex;
    text-align: center;
    justify-content: center;
  }
  @media screen and (max-width: 400px) {
      margin-left: 30px;
    max-width: 300px;
    text-align: center;
right: 20px;

  }
  @media screen and (max-width: 360px) {
      margin-left: 20px;
    max-width: 250px;

  }
`;
export const ContentAction = styled(Link)`
text-decoration: none;
  background-color: #E93A7D;
  color: white;
  border: none;
  font-size: 20px;
  padding: 15px 50px;
  border-radius: 5px;
position: relative;
top:40px;

  &:hover {
    opacity: 80%;
  }
  @media screen and (max-width: 830px) {
    transition: 0.2s ease-in-out;
    margin: 40px 180px;
    padding: 5px 30px;
    font-size: 15px;




  }
  @media screen and (max-width: 500px) {
    transition: 0.2s ease-in-out;
    margin: 40px 130px;
    padding: 5px 30px;
    font-size: 15px;
  }
  @media screen and (max-width: 557px) {
    transition: 0.2s ease-in-out;
    margin: 40px 130px;
    padding: 5px 10px;
    font-size: 15px;
  }
  @media screen and (max-width: 400px) {
    transition: 0.2s ease-in-out;
    margin: 40px 115px;
    padding: 5px 1px;
    font-size: 14px;
  }
  @media screen and (max-width: 360px) {
    transition: 0.2s ease-in-out;
    margin: 40px 120px;
    padding: 5px 5px;
    font-size: 14px;
  }
`;