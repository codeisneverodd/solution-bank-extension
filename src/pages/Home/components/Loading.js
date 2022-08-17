import colors from "../../../shared/constants/colors";
import { Image } from "../../../shared/components";
import { loadingGhostImage } from "../../../shared/images";
import styled from "styled-components";
import React from "react";
import { linkTo } from "../../../shared/utils/chrome";
import { REPORT_SOLUTION_LINK } from "../../../shared/constants/links";

const Loading = () => {
  return (
    <Wrapper>
      <Image src={loadingGhostImage} width={5} height={5} />
      <Description>정답 찾는 중</Description>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding-top: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;

const Description = styled.div`
  margin-top: 3rem;
  font-size: 1.6rem;
  color: ${colors.navy};
`;
