import { usecontext, useeffect } from "react";
import { projectsintro } from "../styles/projects.styled";
import { cmd, cmddesc, cmdlist, helpwrapper } from "../styles/help.styled";
import {
  checkdownload,
  getcurrentcmdarry,
} from "../../utils/funcs";
import { termcontext } from "../terminal";
import usage from "../usage";

const blog: react.fc = () => {
  const { arg, history, rerender } = usecontext(termcontext);

  /* ===== get current command ===== */
  const currentcommand = getcurrentcmdarry(history);

  /* ===== check current command makes redirect ===== */
  useeffect(() => {
    if (checkdownload(rerender, currentcommand, "")) {
      window.open("https://drive.google.com/uc?export=download&id=1nkb12bisyxdo-fuf6ishciwa1nafyqdi")
    }
  }, [arg, rerender, currentcommand]);

  return (
    <helpwrapper>
    have fun at the blog!
    </helpwrapper>
  );
};

export default blog;
