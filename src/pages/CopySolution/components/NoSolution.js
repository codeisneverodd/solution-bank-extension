import colors from "../../../shared/constants/colors";
import { Image } from "../../../shared/components";
import { cryingImage } from "../../../shared/images";
import styled from "styled-components";
import React from 'react';

const NoSolution = () => {
  return (
    <Wrapper>
      <Image src={cryingImage} width={3.4} height={3.4} />
      <Description>준비된 정답이 없어요</Description>
      <SolutionReportButton>정답 제보하기</SolutionReportButton>
    </Wrapper>
  );
};

export default NoSolution;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding-top: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.navy};
`;

const Description = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: ${colors.white};
`;

const SolutionReportButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.3rem;
  height: 2.7rem;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1.4rem;
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: 1.5rem;
`;
