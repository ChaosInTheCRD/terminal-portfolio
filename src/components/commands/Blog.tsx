import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkDownload,
  getCurrentCmdArry,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Blog: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (rerender) {
      window.open("https://blog.chaosinthe.dev")
    }
  }, [arg, rerender, currentCommand]);

  return (
    <HelpWrapper>
      Enjoy the blog!
    </HelpWrapper>
  );
};

export default Blog;
