import React from "react";
import styled from "styled-components";

const FitImage = styled.img`
    height: 1em;
    width: auto;
`;
const Logo = ({ src, alt }) => (
    <FitImage src={src} alt={alt}/>
);

export default Logo;
