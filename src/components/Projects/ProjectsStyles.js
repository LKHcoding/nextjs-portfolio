import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  padding-bottom: ${(props) => (props.project ? "5.5rem" : 0)};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: ${(props) => (props.project ? "5.5rem" : 0)};
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  transition: 0.5s;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 0px 60px rgba(100, 100, 100, 1);
  }
`;
export const TitleContent = styled.div`
  /* padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #2f3541; */
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: left;
  /* text-align: justify; */
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem 1.8rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;

export const ExternalLinks = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  /* color: #d4c0c0; */
  color: white;
  font-size: 1.6rem;
  padding: 0.8rem 1.3rem;
  /* background: #6b3030; */
  background: #5f2909;

  border-radius: 7px;
  transition: 0.5s;
  &:hover {
    /* background: #801414; */
    background: #7b3c17;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  padding-top: 0.8rem;
`;
export const Tag = styled.li`
  /* border: 1px solid white; */
  border-radius: 10px;
  background-color: grey;
  padding: 6px;
  margin: 4px;
  color: white;
  font-size: 1.2rem;
`;
