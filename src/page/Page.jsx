import React from "react";
import styled from "styled-components";

const showBorder = `
position: relative;
::before {
    position: absolute;
    content: "";
    top: 0.3in;
    left: 0.5in;
    width: 7.5in;
    height: 10.2in;
    border: 1px solid black;
}
`;

const PageBox = styled.div`
    width: 8.5in;
    height: 11in;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0.3in;
    background-color: white;
    text-align: justify;
    border: 1px solid black;

    @media print {
    margin-left: 0;
    margin-right: 0;
    border: none;
    }

    >div {
    width: 7.5in;
    height: 10.2in;
    margin: auto;
    padding: 0;
    }

    ${(props) => props.border === true ? showBorder : ""}
`;
const Page = ({ children, id, showBorder }) => (
    <PageBox border={showBorder}>
        <div id={id}>{children}</div>
    </PageBox>
);

export default Page;
