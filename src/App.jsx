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
        description: (<dl>
            <dd>Created user-friendly Ontario Court form completion single page application.</dd>
            <dd>Created extensible form interface using <b>React</b>, <b>Node.js</b>, <b>JSON</b>, and <b>SCSS</b>.</dd>
            <dd>Improved project understanding by <b>mentoring</b> team about the <b>NPM</b> build system, website hosting, <b>HTTPS</b> authentication, and the <b>Linux</b> environment.</dd>
            <dd>Standardized site deployment by containerizing server using <b>Docker Compose</b>.</dd>
        </dl>)
    },
    {
        skip: true,
        title: "President",
        location: "Flounder News",
        start: "September 2019",
        end: "June 2020",
        href: "https://floundernews.tk",
        spoiler: "Home page",
        description: (<dl>
            <dd>Created a satirical school newspaper that publishes online and in print.</dd>
            <dd>Managed writing team, editors, and publishing.</dd>
            <dd>Aimed to inform student body about school events and issues through comedy.</dd>
        </dl>)
    }
].filter((e) => !(e.skip));

const hackathonEntries = [
    {
        skip: true,
        title: "Application Developer",
        location: "Smouse | TOHacks",
        start: "May 2018",
        href: "https://github.com/haritkapadia/smouse",
        spoiler: "GitHub repository",
        tags: ["Java", "Android Studio"],
        description: (<dl>
            <dd>Developed an Android app that works as a computer mouse.</dd>
            <dd>Used accelerometer data from phone to calculate mouse movement.</dd>
            <dd>Created server application for phone to interface with computer.</dd>
        </dl>)
    },
    {
        title: "Backend Developer",
        location: "PCTeacher | PCHacks",
        start: "May 2019",
        href: "https://github.com/haritkapadia/PCTeacher",
        spoiler: "GitHub repository",
        tags: ["Python", "Django", "Jinja"],
        description: (<dl>
            <dd>Created a learning platform that delivers personalized lessons to those with learning disabilities using <b>Django</b> and <b>Jinja</b>.</dd>
            <dd>Earned <b>third place</b> team at PCHacks 2019 for creative use of technology to support those with disabilities.</dd>
        </dl>)
    },
    {
        skip: true,
        title: "Software Developer",
        location: "Urge Purge | Hack the Hammer",
        start: "December 2019",
        href: "https://github.com/haritkapadia/urge-purge",
        spoiler: "GitHub repository",
        tags: ["Node.js", "Python", "PyQt5"],
        description: (<dl>
            <dd>Created a website and software blocker that allows delayed access for sites and programs to fight impulses.</dd>
            <dd>Made proxy and process watcher to block sites and programs.</dd>
            <dd>Made web interface to manage allow lists and deny lists.</dd>
        </dl>)
    },
    {
        title: "Mobile Developer",
        location: "RNJogger | HackThe6ix",
        start: "August 2020",
        href: "https://github.com/haritkapadia/random-running-app",
        spoiler: "GitHub repository",
        tags: ["React Native", "MapBox", "OpenStreetMap"],
        description: (<dl>
            <dd>Created mobile app that prepares random jogging routes based on user location and desired distance using <b>React Native</b> and <b>OpenStreetMap</b>.</dd>
            <dd>Visualised generated route by designing a native map interface with <b>MapBox</b>.</dd>
            <dd>Improved user engagement by building a distance leaderboard for friend groups.</dd>
        </dl>)
    }
].filter((e) => !(e.skip));

const projectEntries = [
    {
        title: "Application Developer",
        location: "36 Days Game",
        start: "May 2019",
        end: "June 2019",
        href: "https://github.com/haritkapadia/36daysgame",
        spoiler: "GitHub repository",
        tags: ["Java", "JavaFX", "J3D Texture"],
        description: (<dl>
            <dd>Created an open-world top-down wilderness survival game using <b>JavaFX</b>.</dd>
            <dd>Features procedurally generated worlds using <b>J3D Texture</b>, levels, in-game survival guide, health, hunger, a day/night cycle, and environmental threats.</dd>
            <dd>Enabled cross-platform JAR packaging using <b>Gradle</b>.</dd>
        </dl>)
    },
    {
        skip: true,
        location: "Bullet Hell Rhythm Game",
        start: "November 2019",
        end: "Present",
        href: "https://github.com/haritkapadia/bhrg",
        spoiler: "GitHub repository",
        tags: ["C++", "SDL 2", "Essentia"],
        description: (<dl>
            <dd>Creating a bullet hell game that automatically syncs to music.</dd>
            <dd>Features a custom collision engine and map editor.</dd>
        </dl>)
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
        {/* tags === undefined ? tags : (<TagList title="Technologies used">{tags.map((t) => <TagList.Tag key={t}>{t}</TagList.Tag>)}</TagList>) */}
        <div className="row">
            <div className="col-10">
                {description /* description === undefined ? description : description.trim().split("\n").map((e) => <dd key={e}>{e.trim()}</dd>) */}
            </div>
        </div>
    </Entry>
));

const resume = (
    <React.Fragment>
        <Block title="Relevant Experience">
            {entriesToElems(workEntries)}
            {entriesToElems(hackathonEntries)}
        </Block>
        <Block title="Projects">
            {entriesToElems(projectEntries)}
        </Block>
        <Block title="Education">
            <Entry location="University of Waterloo and Wilfrid-Laurier University" date="2020 – 2025">
                <dl>
                    <dd>Pursuing double degree in B. Computer Science (UW) and B. Business Administration (WLU).</dd>
                    <dd>3.92 / 4.00 GPA</dd>
                </dl>
            </Entry>
        </Block>
        <Block title="Languages" compact>
            Python, Bash, Javascript, Typescript, SQL, Java, C, C++, Racket, Common Lisp.
        </Block>
        <Block title="Tools" compact>
            Git, Visual Studio, CMake, Gradle, Docker, NPM, Microsoft Excel, Microsoft Access.
        </Block>
    </React.Fragment>
);

const Name = styled.div`
    h1 {
    text-transform: uppercase;
    color: var(--primary);
    line-height: 1;
    font-size: 2rem;
    }
    [role="doc-subtitle"] {
    font-family: "Zilla Slab";
    font-size: 1.25rem;
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
`;

const Logos = styled.span`
    font-family: FontAwesome;
    margin-right: 4px;
    display: inline-block;
    transform: translateY(1px);
`;

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
                        <Logos></Logos>
                        <Link href="https://haritkapadia.github.io"/>
                    </div>
                    <div>
                        <Logos></Logos>
                        <Link href="mailto:h3kapadi@uwaterloo.ca"/>
                    </div>
                    <div>
                        <Logos></Logos>
                        <Link href="https://github.com/haritkapadia"/>
                    </div>
                    <div>
                        <Logos></Logos>
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
