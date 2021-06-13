import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
  BoxTextPeriod,
} from "./AcomplishmentsStyles";

const data = [
  {
    title: "영남대학교",
    text: "정보통신공학과 중퇴",
    period: "2010-03 ~ 2011-02",
  },
  { title: "백제예술대", text: "실용음악과 졸업", period: "2015-03 ~ 2017-02" },
  {
    title: "영남인재교육원",
    text: "AI활용 소프트웨어 개발 및 응용SW 개발자 교육 과정",
    period: "2020-06 ~ 2020-12",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>
            {card.text}
            {card.title === "영남인재교육원" && (
              <a
                target="_blank"
                href="https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=AIG20190000246192&tracseTme=1&crseTracseSe=C0061&trainstCstmrId=#"
                style={{ marginLeft: "3px", color: "skyblue" }}
              >
                (링크)
              </a>
            )}
          </BoxText>
          <BoxTextPeriod>({card.period})</BoxTextPeriod>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
