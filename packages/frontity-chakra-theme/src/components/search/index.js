import React, { useState, useEffect, useRef, useId } from "react";
import { connect, styled, css } from "frontity";
import Link from "@frontity/components/link";
import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const RenderPosts = connect(({ onClose, articles }) => {
  return (
    <>
      {articles.length > 0 && (
        <SearchWraper>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
          >
            <SearchTitle>Blog</SearchTitle>
            {articles.length > 0 &&
              articles.reverse().map((article) => {
                return (
                  <p key={article.id.toString()}>
                    <LinkTo onClick={onClose} link={article.link}>
                      {article.title.rendered}
                    </LinkTo>
                  </p>
                );
              })}
          </motion.div>
        </SearchWraper>
      )}
    </>
  );
});
const RenderPage = connect(({ onClose, articles }) => {
  return (
    <>
      {articles.length > 0 && (
        <SearchWraper>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
          >
            <SearchTitle>Pages</SearchTitle>
            {articles.length > 0 &&
              articles.reverse().map((article) => {
                return (
                  <p key={article.id.toString()}>
                    <LinkTo
                      onClick={onClose}
                      link={
                        article.link == "/our-ambassadors/"
                          ? "/ambassadors/"
                          : article.link
                      }
                    >
                      {article.title.rendered}
                    </LinkTo>
                  </p>
                );
              })}
          </motion.div>
        </SearchWraper>
      )}
    </>
  );
});
const RenderPartners = connect(({ onClose, articles }) => {
  return (
    <>
      {articles.length > 0 && (
        <SearchWraper>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
          >
            <SearchTitle>Partners</SearchTitle>
            {articles.length > 0 &&
              articles.reverse().map((article) => {
                return (
                  <p key={article.id.toString()}>
                    <LinkTo onClick={onClose} link={article.link}>
                      {article.title.rendered}
                    </LinkTo>
                  </p>
                );
              })}
          </motion.div>
        </SearchWraper>
      )}
    </>
  );
});
const RenderProjects = connect(({ onClose, articles }) => {
  return (
    <>
      {articles.length > 0 && (
        <SearchWraper>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
          >
            <SearchTitle>Projects</SearchTitle>
            {articles.length > 0 &&
              articles.reverse().map((article) => {
                return (
                  <p key={article.id.toString()}>
                    <LinkTo onClick={onClose} link={article.link}>
                      {article.title.rendered}
                    </LinkTo>
                  </p>
                );
              })}
          </motion.div>
        </SearchWraper>
      )}
    </>
  );
});
const RenderAmbassadors = connect(({ onClose, articles }) => {
  return (
    <>
      {articles.length > 0 && (
        <SearchWraper>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
          >
            <SearchTitle>Ambassadors</SearchTitle>
            {articles.length > 0 &&
              articles.reverse().map((article) => {
                return (
                  <p key={article.id.toString()}>
                    <LinkTo onClick={onClose} link={article.link}>
                      {article.title.rendered}
                    </LinkTo>
                  </p>
                );
              })}
          </motion.div>
        </SearchWraper>
      )}
    </>
  );
});
const RenderNews = connect(({ onClose, articles }) => {
  return (
    <>
      {articles.length > 0 && (
        <SearchWraper>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
          >
            <SearchTitle>News</SearchTitle>
            {articles.length > 0 &&
              articles.reverse().map((article) => {
                return (
                  <p key={article.id.toString()}>
                    <LinkTo onClick={onClose} link={article.link}>
                      {article.title.rendered}
                    </LinkTo>
                  </p>
                );
              })}
          </motion.div>
        </SearchWraper>
      )}
    </>
  );
});
const RenderRewards = connect(({ onClose, articles }) => {
  return (
    <>
      {articles.length > 0 && (
        <SearchWraper>
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
          >
            <SearchTitle>Rewards</SearchTitle>
            {articles.length > 0 &&
              articles.reverse().map((article) => {
                return (
                  <p key={article.id.toString()}>
                    <LinkTo onClick={onClose} link={article.link}>
                      {article.title.rendered}
                    </LinkTo>
                  </p>
                );
              })}
          </motion.div>
        </SearchWraper>
      )}
    </>
  );
});

const LinkTo = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16.33px;
  line-height: 24px;
  color: #212121;
  :hover {
    border-bottom-width: 1px;
    border-bottom-color: #4c43cd;
    border-bottom-width: 1px;
  }
`;

const Search = ({ isOpen, onClose, state, actions, reference }) => {
  const [filterPosts, setFilterPosts] = useState([]);
  const [filterPage, setFilterPage] = useState([]);
  const [filterPartners, setFilterPartners] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [filterAmbassadors, setFilterAmbassadors] = useState([]);
  const [filterNews, setFilterNews] = useState([]);
  const [filterRewards, setFilterRewards] = useState([]);

  useEffect(() => {
    reference.current.focus();
  }, [isOpen]);

  useEffect(() => {
    const Post = state.source.post;
    const Page = state.source.page;
    const Partners = state.source.partners;
    const Projects = state.source.projects;
    const Ambassadors = state.source.ambassadors;
    const News = state.source.news;
    const Rewards = state.source.rewards;

    setFilterPosts(
      Object.values(Post).filter((itemFilter) =>
        itemFilter.title.rendered
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            state.theme.searchValue
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
    );
    setFilterPage(
      Object.values(Page).filter((itemFilter) =>
        itemFilter.title.rendered
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            state.theme.searchValue
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
    );
    setFilterPartners(
      Object.values(Partners).filter((itemFilter) =>
        itemFilter.title.rendered
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            state.theme.searchValue
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
    );
    setFilterProjects(
      Object.values(Projects).filter((itemFilter) =>
        itemFilter.title.rendered
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            state.theme.searchValue
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
    );
    setFilterAmbassadors(
      Object.values(Ambassadors).filter((itemFilter) =>
        itemFilter.title.rendered
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            state.theme.searchValue
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
    );
    setFilterNews(
      Object.values(News).filter((itemFilter) =>
        itemFilter.title.rendered
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            state.theme.searchValue
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
    );
    setFilterRewards(
      Object.values(Rewards).filter((itemFilter) =>
        itemFilter.title.rendered
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            state.theme.searchValue
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
    );
  }, [state.theme.searchValue]);

  const inputRef = useRef(null);

  const buscar = (event) => {
    event.target.value.length > 1
      ? actions.theme.setSearchValue(event.target.value)
      : (state.theme.searchValue = "");
  };

  /*   const cerrarMenu = () => {
		setActive(!active);
	  }; */

  return (
    <Visible>
      <SerachWrapper className={isOpen ? "active" : "dissable"} ref={inputRef}>
        <Container>
          <Close
            sx={
              state.theme.isMobile
                ? { top: "42px", right: "32px", fontSize: "24px" }
                : { top: "60px", right: "120px", fontSize: "32px" }
            }
            className="icon-close"
            onClick={onClose}
          />
          <Form>
            <Input
              ref={reference}
              type="text"
              placeholder="Type here to search"
              onChange={(event) => buscar(event)}
            />
            <Icon className="icon-search"></Icon>

            {state.theme.searchValue.trim().length > 0 && (
              <Results>
                {state.theme.searchValue.trim().length > 0 && (
                  <RenderPosts articles={filterPosts} onClose={onClose} />
                )}
                {state.theme.searchValue.trim().length > 0 && (
                  <RenderPage articles={filterPage} onClose={onClose} />
                )}
                {state.theme.searchValue.trim().length > 0 && (
                  <RenderPartners articles={filterPartners} onClose={onClose} />
                )}
                {state.theme.searchValue.trim().length > 0 && (
                  <RenderProjects articles={filterProjects} onClose={onClose} />
                )}
                {state.theme.searchValue.trim().length > 0 && (
                  <RenderAmbassadors
                    articles={filterAmbassadors}
                    onClose={onClose}
                  />
                )}
                {state.theme.searchValue.trim().length > 0 && (
                  <RenderNews articles={filterNews} onClose={onClose} />
                )}
                {state.theme.searchValue.trim().length > 0 && (
                  <RenderRewards articles={filterRewards} onClose={onClose} />
                )}
              </Results>
            )}
          </Form>
        </Container>
      </SerachWrapper>
    </Visible>
  );
};

export default connect(Search);

const breakpoints = [577, 769, 993, 1240];

const media = breakpoints.map((size) => `@media (min-width: ${size}px)`);

const Close = styled(Box)`
  cursor: pointer;
  position: absolute;
  color: #150f35;
  margin: 11px;
`;

const Icon = styled.div`
  display: inline-block;
  position: absolute;
  padding: 2px;
  top: 47px;
  right: 42px;
  background-color: transparent;
  width: 23px;
  height: 23px;
  color: #4c43cd;
  text-align: center;
  vertical-align: middle;
  line-height: 25px;
  font-size: 22px;
  ${media[2]} {
    padding: 4px;
    width: 29px;
    height: 29px;
    top: 60px;
    right: 68px;
  }
`;

const SearchWraper = styled.div`
  p {
    position: relative;
  }
`;

const SearchTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #4c43cd;
`;

const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 32px;
  ${media[2]} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Form = styled.div`
  overflow-y: auto;
  position: relative;
  z-index: 999999;

  min-height: 80px;
  max-height: calc(90vh - 100px);
  background-color: transparent;
  padding: 25px;
  width: 100%;
  ${media[2]} {
    padding: 40px 52px;
    width: 649px;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #4c43cd;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #4c43cd;
    border-radius: 5px;
  }
`;

const Input = styled.input`
  margin-bottom: 25px;
  border-bottom: 2px solid #150f35;
  box-sizing: border-box;
  padding: 12px 20px;
  width: 100%;
  height: 68px;
  background-color: transparent;
  font-style: normal;
  font-weight: 300;
  color: #8684b1;
  ${media[2]} {
    font-size: 33.16px;
    line-height: 42px;
  }
  &:focus-visible {
    outline: transparent auto 0px;
    border-bottom: 2px solid #4c43cd;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 118px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.96);
  ${media[2]} {
    width: 100%;
  }
`;

const Visible = styled.div`
  .dissable {
    visibility: hidden;
    opacity: 0;
    transition: visibility ease-in-out 0.2s, opacity ease-in-out 0.2s;
  }
  .active {
    visibility: visible;
    opacity: 1;
    transition: visibility ease-in-out 0.2s, opacity ease-in-out 0.2s;
  }
`;

const SerachWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #f8f1e7;
  ${media[2]} {
    background: rgba(0, 0, 0, 0.6);
  }
`;
