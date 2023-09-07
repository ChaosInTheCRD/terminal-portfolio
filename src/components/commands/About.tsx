import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

import { Cmd } from "../styles/Welcome.styled.tsx";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Tom Meadows</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Software Engineer</HighlightAlt> based in London,
        UK and I specialise in Kubernetes and Cloud Native Security. I am originally from Scotland, although if you meet me you'll realise that I don't sound like it!
      </p>
      <p>
        I enjoy writing code in Golang and learning about new technologies (especially if they're Kubernetes and Cloud Native related) that are in the Open Source (such as SPIFFE, Software Supply Chain Security, Nix, eBPF etc.).

        If you want to learn more about me just get in touch (try entering <Cmd>socials</Cmd> or <Cmd>email</Cmd> into the terminal!)
      </p>
    </AboutWrapper>
  );
};

export default About;
