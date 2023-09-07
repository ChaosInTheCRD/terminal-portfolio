import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  TalkDesc,
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
    if (checkRedirect(rerender, currentCommand, "talks")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="talks" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="talks">
      <ProjectsIntro>
      These are all the (public) talks that I have given at events and conferences. I am always keen to give more provided there is
      an interesting subject that could make a compelling story.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <TalkDesc>{desc}</TalkDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Cert-Manager Can Do SPIFFE? Solving Multi-Cloud Workload Identity Using a De Facto Standard Tool",
    desc: "If you’re like me, your Kubernetes journey started well. Booting up a cluster and deploying a demo application, only to find the dreaded “Your connection is not private” message in your web browser. Attackers could be stealing your information, credit cards and passwords? Frankly, your sock shopping addiction should be nobody's business. Luckily I found the cert-manager project. As if by magic, this clever controller made my security woes fold away. What about secrets? API and service account keys. This highly sensitive data must be bolted to your pod to ensure it can access databases, api-servers and more. After accidentally committing raw secrets to Github (nobody got time for that), I grew tired. I crawled away into the wonders of Google Cloud Workload Identity. But wait? Haven't I given up on the wonder of multi-cloud Kubernetes? If only identity could come batteries included. As an encore in the machine identity space, cert-manager now leverages SPIFFE to solve this problem. Pods are empowered to enter the VIP lounge of their choice in whatever cloud, provided they are on the guest list. Don't believe me? Call me on my bluff. Join me as I explore how this industry problem has been solved using the same magic that gave us TLS on Kubernetes only a few short years ago.",
    url: "https://youtu.be/Z7WSo-K0xuA?si=qDxErGFIbSGbqZl9",
  },
  {
    id: 2,
    title: "Building a Portable Kubernetes Deployment Pipeline with Argo Workflows and Events",
    desc: "In this session, Jetstack and Improbable will uncover the key learnings from building a Kubernetes based platform, driven by Argo workflows and events. Featuring discussion on the platform's strong data aggregation and the ability to deploy on any estate (including air-gapped facilities), this session will investigate the problems and benefits of using Argo and Kubernetes as the key ingredients towards the goal of a holistic approach to portable platforms.",
    url: "https://youtu.be/JvbwpiFnBuA?si=S4zBY8G2aNcgciSs",
  },
  {
    id: 3,
    title: "The Scanner is Not Enough: Approaches to SBOM Generation",
    desc: "n/a... just watch it.",
    url: "https://youtu.be/WMWQO77NNdc?si=H5l_3NiIsQf5BkqA",
  },
  {
    id: 4,
    title: "Why am I here?",
    desc: "Yeah I know... a bit odd eh 😁.",
    url: "https://youtu.be/PGtsIhnuc_w?si=LY9R31_Ke82h2wtJ",
  },
];

export default Projects;
