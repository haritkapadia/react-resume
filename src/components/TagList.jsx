import React from "react";
import styled from "styled-components";

const Tag = (props) => <span {...props} />;

const StyledTagList = styled.div`
    font-size: 1rem;
    font-style: italic;
    font-weight: bold;
    ::before {
    content: "> ";
    }
`;

const TagList = ({ title, children }) => (
    <StyledTagList>
        <span>{title}: </span>
        {
            ( // let l = reduced array with commas
              (l) => (
                  l.length === 0 ? l : // No entries, what are you doing
                  l.length === 2 ? [l[0]] : // 1 entry
                  l.length === 4 ? [l[0], <span> and </span>] : // 2 entries
                  l.slice(0, -2).concat([<span>and </span>])).concat(l.slice(-2, -1)) // > 2 entries
            )(children.reduce((acc, el, idx) => acc.concat([el, <span>, </span>]), []))
        }
        <span>.</span>
    </StyledTagList>
);

TagList.Tag = Tag;

export default TagList;
export {TagList, Tag};
