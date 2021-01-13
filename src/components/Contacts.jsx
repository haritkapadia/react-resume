import React from "react";
import styled from "styled-components";

const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledContacts = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    
    >* {
    margin-right: 16px;
    }
    
    div img {
    margin-right: 4px;
    }
`;

const StyledContactsTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 16px;
    line-height: 1.5;
    font-weight: bold;
    font-size: 1rem;
    text-shadow: none;
`;
const Contacts = ({ title, children }) => (
    <ContactsWrapper>
        <StyledContactsTitle>{title}</StyledContactsTitle>
        <StyledContacts>{children}</StyledContacts>
    </ContactsWrapper>
);

export default Contacts;
