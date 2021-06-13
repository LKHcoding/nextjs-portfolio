import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

import { SocialIcons } from "../Header/HeaderStyles";

import { AiFillGithub, AiOutlineGlobal, AiFillYoutube } from "react-icons/ai";
import { SiNotion } from "react-icons/si";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer project>
      {projects.map(
        ({
          id,
          image,
          title,
          description,
          tags,
          github,
          visit,
          notion,
          youtube,
        }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title="true">{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <div>
              {description.split("\n").map((item, i) => (
                <CardInfo key={i}>{item}</CardInfo>
              ))}
            </div>

            <div>
              <TitleContent
                style={{
                  paddingTop: "10px",
                  marginTop: "10px",
                  borderTop: "1px solid #2f3541",
                }}
              >
                Stack
              </TitleContent>
              <TagList>
                {tags.map((tag) => (
                  <Tag key={tag + id.toString()}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              {github && (
                <SocialIcons
                  target="_blank"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                  href={`${github}`}
                >
                  <AiFillGithub size="3rem" />
                </SocialIcons>
              )}
              {notion && (
                <SocialIcons
                  target="_blank"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                  href={`${notion}`}
                >
                  <SiNotion size="2.5rem" />
                </SocialIcons>
              )}
              {visit && (
                <SocialIcons
                  target="_blank"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                  href={`${github}`}
                >
                  <AiOutlineGlobal size="3rem" />
                </SocialIcons>
              )}
              {youtube && (
                <SocialIcons
                  target="_blank"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                  href={`${youtube}`}
                >
                  <AiFillYoutube size="3rem" />
                </SocialIcons>
              )}
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
