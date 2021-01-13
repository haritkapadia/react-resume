import React from "react";
import styled from "styled-components";

const showBorder = `
position: relative;
::before {
    position: absolute;
    content: "";
    top: 0.5in;
    left: 0.5in;
    width: 7.5in;
    height: 10in;
    border: 1px solid black;
}
`;

const PageBox = styled.div`
    width: 8.5in;
    height: 11in;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5in;
    padding-top: calc(0.5in - 0.5rem);
    background-color: white;
    text-align: justify;
    >div {
    width: 7.5in;
    height: 10in;
    margin: auto;
    padding: 0;
    background-color: white;
    }
    ${(props) => props.border === true ? showBorder : ""}
    }
`;
const Page = ({ children, id }) => (
    <PageBox>
        <div id={id}>{children}</div>
    </PageBox>
);

export default Page;
