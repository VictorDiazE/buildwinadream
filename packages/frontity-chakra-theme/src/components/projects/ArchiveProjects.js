import React, { useState, useEffect } from "react";
import { connect, styled, decode } from "frontity";
import Image from "@frontity/components/image";
import {
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  Flex,
  chakra,
  Img,
  SimpleGrid,
  LinkBox,
} from "@chakra-ui/react";

import FeaturedMedia from "../image/FeaturedMedia";
import FilterProjectsButtons from "./FilterProjectsButtons";
import FrontityLink from "@frontity/components/link";
const LinkOverlay = chakra(FrontityLink);

const ArchiveProjects = ({ state, libraries, actions, ...props }) => {
  //GET PROJECTS FROM STATE
  const GetProjects = state.source.projects;
  const Projects = Object.values(GetProjects);
  state.theme.projects = Projects.map(
    (project) => state.source[project.type][project.id]
  );
  // Guardamos todas las categorías en Theme de Frontity
  state.theme.allCategories = state.source.data["all-categories/"].items;
  // Guardamos la lista de proyectos de "state.theme.projects" en "projectsFilter" para poder filtrarlos
  const Html2React = libraries.html2react.Component;
  /*   const projects = state.source.get("/projects/");
  console.log(projects); */
  const [projectsFilter, setProjectsFilter] = useState(state.theme.projects);
  const subtitle = props?.subtitle;
  const title = props?.title;
  const fontSize = props?.fontSize;
  const fontSizeMobile = props?.fontSizeMobile;
  const content = props?.content;
  const bg = props?.bg;
  var bgColor = bg?.bg_color;
  var bgGradient = bg?.bg_gradient;
  // Creamos la funcion filterItem para filtrar los proyectos mediante el ID de la categoría
  const filterItem = (curcat) => {
    const newItem = state.theme.projects.filter((newVal) => {
      const item = state.source[newVal.type][newVal.id];
      return (
        item.categories[0] === curcat ||
        item.categories[1] === curcat ||
        item.categories[2] === curcat
      );
    });
    setProjectsFilter(newItem);
  };

  const data = state.source.get("/projects/");
  const id = data.id;

  return (
    <>
      <ProjectsWrapper as="section" bg={bgGradient + "," + bgColor}>
        <ProjectsContainer
          mx="auto"
          maxWidth="1200px"
          px="30px"
          display="flex"
          direction="column"
        >
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {title && (
            <Title
              fontWeight="900"
              fontSize={{ base: fontSizeMobile, md: fontSize }}
              lineHeight={{ base: fontSizeMobile, md: fontSize }}
              textTransform="uppercase"
            >
              {title}
            </Title>
          )}
          {content && (
            <Description>
              <Html2React html={content} />
            </Description>
          )}
          <FilterProjectsButtons
            filterItem={filterItem}
            setProjectsFilter={setProjectsFilter}
          />
          <SimpleGrid
            columns={[1, 2, 3, 4]}
            spacingX="15px"
            spacingY="56px"
            mt="30px"
          >
            {projectsFilter.map((project, index) => {
              // featured_media
              return (
                <ProjectCard key={index}>
                  <LinkBox as="article" rounded="8px">
                    <LinkOverlay link={project.link}>
                    <FeaturedMedia id={project?.featured_media} />
                    </LinkOverlay>
                    <ContentOverlay
                      link={project.link}
                      dangerouslySetInnerHTML={{
                        __html: project.title.rendered,
                      }}
                    >
                      
                    </ContentOverlay>
                  </LinkBox>
                </ProjectCard>
              );
            })}
          </SimpleGrid>
        </ProjectsContainer>
      </ProjectsWrapper>
    </>
  );
};

export default connect(ArchiveProjects);

const ContentOverlay = styled(LinkOverlay)`
  display: block;
  padding: 20px 27px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 18.66px;
  line-height: 30px;
  color: #150f35;
`;

const ProjectCard = styled(Box)`
  border-radius: 8px;
  overflow: hidden;
  background: #dee4ed;
`;

const ProjectsWrapper = styled(Box)`
  padding: 110px 0;
  overflow: hidden;
  position: relative;
`;

const ProjectsContainer = styled(Flex)``;

const Title = styled(Text)`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 900;
  line-height: 100%;
  padding: 30px 0;
  text-transform: uppercase;
  color: #ffffff;
`;

const Subtitle = styled(Text)`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 24.88px;
  line-height: 36px;
  color: #ffffff;
`;

const Description = styled(Text)`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #dee4ed;
`;
