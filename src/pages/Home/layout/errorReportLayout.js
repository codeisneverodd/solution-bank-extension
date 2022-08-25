import styled from "styled-components";
import { Image } from "../../../shared/components";
import colors from "../../../shared/constants/colors";
import React from "react";
const ErrorReportLayout = ({
  iconSrc,
  description,
  fontSize = 2.2,
  backgroundColor = colors.green,
  handleErrorClick,
}) => {
  return (
    <Wrapper>
      <Alert backgroundColor={backgroundColor}>
        <Image src={iconSrc} width={2.4} height={2.4} />
        <Description fontSize={fontSize}>{description}</Description>
      </Alert>
      <ErrorReport onClick={handleErrorClick}>오류 제보하기</ErrorReport>
    </Wrapper>
  );
};
export default ErrorReportLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Alert = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.7rem;
  width: 100%;
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
`;
const Description = styled.div`
  font-size: ${(props) => props.fontSize}rem;
  margin-top: 1.2rem;
  color: ${colors.white};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  line-height: 1.4;
  width: 70%;
`;
const ErrorReport = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightGray};
  width: 100%;
  height: 2.7rem;
  font-size: 1.1rem;
  color: ${colors.white};
  &:hover {
    cursor: pointer;
  }
`;
