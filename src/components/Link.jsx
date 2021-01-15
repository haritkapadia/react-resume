import React from "react";
import styled from "styled-components";

const StyledLink = styled.span`
    font-weight: normal;
    a {
    border-bottom: solid 1px;
    font-family: "MyZilla", "Zilla Slab";
    font-style: italic;
    }
`;

const Link = ({ href, children }) => (
    <StyledLink>
        {children}
        <a href={href}>{((url) => {
                const p = url.pathname;
                if(url.protocol === "tel:")
                    return `${p.substr(2, 3)}-${p.substr(5, 3)}-${p.substr(8)}`;
                return url.hostname + p.replace(/\/$/, "")
        })(new URL(href))}</a>
    </StyledLink>
);

export default Link;
