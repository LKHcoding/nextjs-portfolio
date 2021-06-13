import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import { MdEmail } from "react-icons/md";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>PhoneCall</LinkTitle>
          <LinkItem href="tel:010-7751-3408">010-7751-3408</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:lkhcoding@gmail.com">
            lkhcoding@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Powered By LKHcoding</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/LKHcoding">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.notion.so/f0efb3447c3e42b1b228d6497ab5be87?v=b05a569e16a84c84802710f69fc2351a"
          >
            <SiNotion size="2.5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
