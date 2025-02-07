import { useContext, useEffect } from "react";
import { HelpWrapper } from "../styles/Help.styled";
import {
  checkDownload,
  getCurrentCmdArry,
} from "../../utils/funcs";
import { termContext } from "../Terminal";

const Photos: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkDownload(rerender, currentCommand, "photos")) {
      window.open("https://photos.chaosinthe.dev")
    }
  }, [arg, rerender, currentCommand]);

  return (
    <HelpWrapper>
      Enjoy the blog!
    </HelpWrapper>
  );
};

export default Photos;
