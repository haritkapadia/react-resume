import React from "react";
import "./page/page.css";
import Page from "./page/Page";

import styled from "styled-components";
import websiteIcon from './logo/website.svg';
import emailIcon from './logo/email.png';
import githubIcon from './logo/GitHub-Mark-120px-plus.png';
import phoneIcon from './logo/phone.svg';
import Logo from "./components/Logo";
import Link from "./components/Link";
import Contacts from "./components/Contacts";
import TagList from "./components/TagList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const jobTitle = "Full Stack Developer studying Computer Science and Business Administration";
const jobDescription = ""; //"Self-starting student with software, smartphone, and professional full-stack development experience."

const workEntries = [
    {
        title: "Lead Developer",
        location: "DivorceAide",
        start: "May 2020",
        end: "November 2020",
        href: "https://divorceaide.ca",
        spoiler: "Home page",
        tags: ["Node.js", "React", "Plausible", "React Router", "Docxtemplater"],
        description: `
            Created web app that assists users in completing Ontario Court forms.
            Mentored team about version control, packages, and server hosting.
            Designed extensible form interface with client and server validation.
            Implemented conversion from user data to official completed Court form.`
    },
    {
        skip: true,
        title: "President",
        location: "Flounder News",
        start: "September 2019",
        end: "June 2020",
        href: "https://floundernews.tk",
        spoiler: "Home page",
        description: `
            Created a satirical school newspaper that publishes online and in print.
            Managed writing team, editors, and publishing.
            Aimed to inform student body about school events and issues through comedy.`
    }
].filter((e) => !(e.skip));

const hackathonEntries = [
    {
        skip: true,
        title: "Application Developer",
        location: "Smouse",
        start: "May 2018",
        href: "https://github.com/haritkapadia/smouse",
        spoiler: "GitHub repository",
        tags: ["Java", "Android Studio"],
        description: `
            Developed an Android app that works as a computer mouse.
            Used accelerometer data from phone to calculate mouse movement.
            Created server application for phone to interface with computer.`
    },
    {
        title: "Backend Developer",
        location: "PCTeacher",
        start: "May 2019",
        href: "https://github.com/haritkapadia/PCTeacher",
        spoiler: "GitHub repository",
        tags: ["Python", "Django", "Jinja"],
        description: `
            Created a learning platform that delivers personalized lessons to those with learning disabilities.
            Third place winner of PCHacks 2019.
            Developed system that adapts lessons for visual and literary learners.`
    },
    {
        skip: true,
        title: "Software Developer",
        location: "Urge Purge",
        start: "December 2019",
        href: "https://github.com/haritkapadia/urge-purge",
        spoiler: "GitHub repository",
        tags: ["Node.js", "Python", "PyQt5"],
        description: `
            Created a website and software blocker that allows delayed access for sites and programs to fight impulses.
            Made proxy and process watcher to block sites and programs.
            Made web interface to manage allow lists and deny lists.`
    },
    {
        title: "Developer",
        location: "RNJogger",
        start: "August 2020",
        href: "https://github.com/haritkapadia/random-running-app",
        spoiler: "GitHub repository",
        tags: ["React Native", "MapBox", "OpenStreetMap"],
        description: `
            Created an Android app that prepares random jogging routes based on user location and desired distance.
            Made a React Native interface with a map displaying the generated routes.
            Built a leaderboard to display longest distances within a friend group.`
    }
].filter((e) => !(e.skip));

const projectEntries = [
    {
        skip: true,
        title: "Lead Developer",
        location: "36 Days Game",
        start: "June 2019",
        href: "https://github.com/haritkapadia/36daysgame",
        spoiler: "GitHub repository",
        tags: ["Java", "JavaFX", "J3D Texture"],
        description: `
            Created an open-world top-down wilderness survival game.
            Features procedurally generated worlds, levels, in-game survival guide, health, hunger, a day/night cycle, and environmental threats.
            Developed world/level data saving system.`
    },
    {
        location: "Bullet Hell Rhythm Game",
        start: "November 2019",
        end: "Present",
        href: "https://github.com/haritkapadia/bhrg",
        spoiler: "GitHub repository",
        tags: ["C++", "SDL 2", "Essentia"],
        description: `
            Creating a bullet hell game that automatically syncs to music.
            Features a custom collision engine and map editor.`
    }
].filter((e) => !(e.skip));

const H2Inline = styled.h2`
    display: inline;
    font-size: 1.5rem;
    ::after {content: ": ";}
`;

const Block = ({ title, children, compact }) => compact === undefined ? (
    <section className="mb-3">
        <header>
            <br/>
            <h2>{title}</h2>
        </header>
        {children}
    </section>
) : (<div><H2Inline>{title}</H2Inline>{children}</div>);

const StyledEntry = styled.div``;

const Entry = ({ title, location, date, nojoin, compact, children }) => (
    <StyledEntry>
        <div className={compact === true ? "" : "d-flex flex-row align-items-end"}>
            <h3 className={compact === true ? "mb-0" : ""}>
                <strong>{title}</strong>
                {(title !== undefined && location !== undefined && nojoin !== true ? " at " : "")}
                {location}
            </h3>
            <h4 className={compact === true ? "mt-0" : "ml-auto text-right"}>{date}</h4>
        </div>
        {Array.isArray(children) ? children.flat().filter((e) => e).filter((e) => e.type !== "dd") : children}
        <dl>
            {Array.isArray(children) ? children.flat().filter((e) => e).filter((e) => e.type === "dd") : undefined}
        </dl>
    </StyledEntry>
);

const entriesToElems = (entries) => entries.map(({title, location, start, end, href, spoiler, tags, description}) => (
    <Entry title={title}
           location={location}
           date={start === undefined ? start : start + (end === undefined ? "" : " – " + end)}
           key={`${title}${location}${start}${end}`}>
        {href === undefined ? href : <Link href={href}>{spoiler}: </Link>}
        {tags === undefined ? tags : (<TagList title="Technologies used">{tags.map((t) => <TagList.Tag key={t}>{t}</TagList.Tag>)}</TagList>)}
        {description === undefined ? description : description.trim().split("\n").map((e) => <dd key={e}>{e.trim()}</dd>)}
    </Entry>
));

const resume = (
    <React.Fragment>
        <Block title="Work Experience">
            {entriesToElems(workEntries)}
        </Block>
        <Block title="Hackathons">
            {entriesToElems(hackathonEntries)}
        </Block>
        <Block title="Projects">
            {entriesToElems(projectEntries)}
        </Block>
        <Block title="Education">
            <Entry location="University of Waterloo and University of Laurier" date="2020 – 2025">
                <dd style={{marginLeft: "2rem"}}>Pursuing double degree in B. Computer Science and B. Business Administration.</dd>
            </Entry>
        </Block>
        <Block title="Languages" compact>
            ES10, Node.js, Typescript, Python, Common Lisp, Racket, Java, C++, C, Clojure.
        </Block>
        <Block title="Frameworks" compact>
            React, Next.js, Express, Webpack, Django, Jinja, Flask, JavaFX, SDL 2, LWJGL.
        </Block>
        <Block title="Tools" compact>
            Git, Gradle, CMake, Android Studio, Arduino, Inkscape, Microsoft Office Excel, Microsoft Office Access.
        </Block>
    </React.Fragment>
);

const Name = styled.div`
    h1 {
    text-transform: uppercase;
    color: var(--primary);
    line-height: 1;
    }
    [role="doc-subtitle"] {
    font-family: "Zilla Slab";
    font-size: 1.5rem;
    color: var(--gray);
    line-height: 1;
    margin-bottom: 0.25rem;
    }
    p {
    margin: 0;
    }
`;

const Line = styled.div`
    border-bottom: 2px dotted var(--gray);
    max-width: 1in;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`

const App = () => (
    <div className="screen-wrapper">
        <Page id="doc" showBorder={false}>
            <header>
                <Name>
                    <h1>Harit Kapadia</h1>
                    <div role="doc-subtitle">{jobTitle}</div>
                    <p>{jobDescription}</p>
                </Name>
                <Contacts title="Contact Me">
                    <div>
                        <Logo src={websiteIcon}/>
                        <Link href="https://haritkapadia.github.io"/>
                    </div>
                    <div>
                        <Logo src={emailIcon}/>
                        <Link href="mailto:haritkapadia@outlook.com"/>
                    </div>
                    <div>
                        <Logo src={githubIcon}/>
                        <Link href="https://github.com/haritkapadia"/>
                    </div>
                    <div>
                        <Logo src={phoneIcon}/>
                        <Link href="tel:+16476774887"/>
                    </div>
                </Contacts>
                <div className="pt-2">
                    <Line />
                </div>
            </header>
            <br/>
            <main>
                {resume}
            </main>
        </Page>
    </div>
);

export default App;
