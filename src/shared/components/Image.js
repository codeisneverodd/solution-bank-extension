import styled from "styled-components";
import React from 'react';
import PropTypes from "prop-types";

const Image = ({ width, height, src, ...props }) => (
  <Wrapper width={width} height={height} src={src} {...props} />
);
const Wrapper = styled.div`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  background-image: url("${(props) => props.src}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
Image.propType = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};
export default Image;
