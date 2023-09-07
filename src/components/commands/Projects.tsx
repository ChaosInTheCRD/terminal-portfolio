import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        All my projects are messy and don't have a bow tied round them, it's just the way it is! <br />
        Be prepared to roll your sleeves up and do some compiling and bug fixing 😈
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Dexter",
    desc: "Trust Dexter to ensure that all your images are pinned by digest for better security.",
    url: "https://github.com/chaosinthecrd/dexter",
  },
  {
    id: 2,
    title: "Mandark (unfinished)",
    desc: "Spoiling Dexter's fun by checking pinned container image references for cosign policy violations.",
    url: "https://github.com/chaosinthecrd/mandark",
  },
  {
    id: 3,
    title: "Attestagon (unfinished)",
    desc: "Create SLSA Provenance attestations for Kubernetes Pods using Tetragon events.",
    url: "https://github.com/chaosinthecrd/attestagon",
  },
  {
    id: 4,
    title: "kube-lock",
    desc: "A pane of glass between you and your Kubernetes clusters.",
    url: "https://github.com/chaosinthecrd/kube-lock",
  },
];

export default Projects;
