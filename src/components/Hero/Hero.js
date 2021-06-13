import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        LKHcoding's Portfolio
      </SectionTitle>
      <SectionText>
        서비스를 만들고 개선하는 매력에 빠진 주니어 웹 개발자입니다.
        JavaScript에서 TypeScript로 메인 언어를 변경 중 이며, React.js, Next.js
        등 Front-End 개발에 관심을 가지고 학습하고 있습니다.
        <br />
        새로운 기술에 거부감 없이 적극적으로 공부하며 Notion을 통해 학습 계획과
        내용을 정리하고 새로운 프로젝트를 진행하며 성장하고 있습니다.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/LKHcoding")}
      >
        View Github
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
