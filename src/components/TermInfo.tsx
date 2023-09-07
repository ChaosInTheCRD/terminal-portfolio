import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>guest</User>@<WebsiteName>chaosinthe.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
