import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>This is what I learned in education and where!</EduIntro>
      {eduBg.map(({ title, desc, grade }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <div className="grade">{grade}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BEng Electronic Engineering with Computer Engineering",
    desc: "University of York | 2015 ~ 2019",
    grade: "Upper Class Second (2.1)",
  },
  {
    title: "School",
    desc: "Loretto School, Musselburgh, UK | 2011 ~ 2015", 
    grade: "A-Level: Economics (B), Maths (B), Physics (C)",
  },
];

export default Education;
