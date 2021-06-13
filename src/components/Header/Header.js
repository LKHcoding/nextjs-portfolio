import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import { DiCssdeck } from "react-icons/di";
import { MdEmail } from "react-icons/md";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/LKHcoding">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.notion.so/f0efb3447c3e42b1b228d6497ab5be87?v=b05a569e16a84c84802710f69fc2351a"
      >
        <SiNotion size="2.5rem" />
      </SocialIcons>
      <SocialIcons href="mailto:lkhcoding@gmail.com">
        <MdEmail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
