import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Music from "./commands/Music";
import Blog from "./commands/Blog"
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Talks from "./commands/Talks";
import CV from "./commands/CV";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "talks", "socials", "themes", "echo", "blog"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          cv: <CV />,
          email: <Email />,
          help: <Help />,
          ls: <Help />,
          history: <History />,
          projects: <Projects />,
          talks: <Talks />,
          pwd: <GeneralOutput>/home/chaosinthecrd</GeneralOutput>,
          easteregg: <GeneralOutput>Something exciting coming soon! It's not easter just yet 😉</GeneralOutput>,
          music: <Music />,
          blog: <Blog />,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>guest</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
