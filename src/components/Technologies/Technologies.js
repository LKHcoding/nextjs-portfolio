import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { SiNextDotJs, SiTypescript } from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Front-End, Back-End, Git 등
      <br />웹 개발 전반에 필요한 다양한 기술들을 다뤄보며 학습하고 있습니다.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" style={{ minWidth: "35px" }} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Next.js, react-query, Zustand, SCSS, Material-Ui,
            Styled-Components ...
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" style={{ minWidth: "35px" }} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Express, Nest.js, TypeORM, Swaggar, Mysql, MariaDB ...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTypescript size="3rem" style={{ minWidth: "35px" }} />
        <ListContainer>
          <ListTitle>TypeScript</ListTitle>
          <ListParagraph>
            Experience with <br />
            TypeScript, JavaScript ...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
