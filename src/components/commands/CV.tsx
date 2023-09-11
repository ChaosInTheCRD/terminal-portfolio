import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkDownload,
  getCurrentCmdArry,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const CV: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkDownload(rerender, currentCommand, "cv")) {
      window.open("https://drive.google.com/uc?export=download&id=1nkB12BIsYxDO-FUF6iSHCiwa1nAFYQDi")
    }
  }, [arg, rerender, currentCommand]);

  return (
    <HelpWrapper>
    Please see CV attached (in the downloads folder 📬)
    </HelpWrapper>
  );
};

export default CV;
