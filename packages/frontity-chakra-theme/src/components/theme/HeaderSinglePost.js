import { styled, connect } from "frontity";
import Link from "../link";
import { Box, Text } from "@chakra-ui/react";
import useInView from "@frontity/hooks/use-in-view";

const HeaderBlog = ({ article, state }) => {
  /*   const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px"
  }); */
  const post = state.source[article.type][article.id];
  const media = state.source.attachment[post?.featured_media];
  if (!media) return null;
  const date = new Date(post.date);
  const acf = post?.acf;
  var duration = acf?.duration;

  // Get Theme Settings Fields
  const theme = state.source.data["acf-options-page/"]?.acf;
  const cardBtnText = theme?.articles_btn?.text;
  var bg = acf?.bg;
  var bgMobile = acf?.bg_mobile?.sizes?.large;
  var background = bg?.sizes?.large;

  return (
    <>
      <ContainerPost
        /*    ref={ref} */
        /*         style={
        inView
          ? { backgroundImage: `url(${media.source_url})`, opacity: 1 }
          : { backgroundColor: "#40986B", opacity: 0 }
      } */
        style={{
          backgroundImage: `linear-gradient(360deg, #150f35 2.92%, rgba(15, 23, 42, 0) 88.66%), linear-gradient(0deg, rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38)), url(${background})`,
          opacity: 1,
        }}
      >
        <Container>
          {/*       <Categories>
          {post.categories.map((id, key) => {
            const category = state.source.category[id];
            return (
              <Link link={category.link} key={key}>
                {category.name}
              </Link>
            );
          })}
          <DatePost>{date.toDateString()}</DatePost>
        </Categories> */}
          {/*          <Headline>
            {duration && (
              <Text color="#dee4ed" fontSize="12px">
                {duration}
              </Text>
            )}
          </Headline>
          <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <Content>{post?.acf?.subtitle}</Content>
          <CardLink link={post.link}>View More</CardLink> */}
        </Container>
      </ContainerPost>
    </>
  );
};

export default connect(HeaderBlog);

const breakpoints = [577, 769, 993, 1200];

const media = breakpoints.map((size) => `@media (min-width: ${size}px)`);

const Categories = styled.div`
  display: flex;
  align-items: center;
  & a {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #f8f1e7;
    padding: 10px 20px;
    margin-right: 10px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(30px);
    border-radius: 24px;
    text-transform: uppercase;
    border: 1px solid transparent;
    transition-duration: 350ms;
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
  }
`;

const CardLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  text-decoration: underline;
  transition: ease-in-out 500ms;
  :hover {
    color: #4c43cd;
  }
`;

const Headline = styled(Box)``;

const ContainerPost = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 800px;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${media[0]} {
    justify-content: start;
  }
  .btn-article {
    display: flex;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  /*   margin: auto  auto 0 auto;
  margin: 0 20px 100px 20px;
  margin-bottom: 0px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 250px 0;
  ${media[0]} {
    width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    margin: auto auto 0 auto;
    align-items: baseline;
  }
  /* & > a {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #f8f1e7;
    border: 1px solid #f8f1e7;
    border-radius: 24px;
    padding: 10px 35px;
    transition-duration: 350ms;
    :hover {
      background-color: #f8f1e7;
      color: #212121;
    }
  } */
`;

const DatePost = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #f8f1e7;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 44px;
  line-height: 54px;
  color: #dee4ed;
  margin: 20px 0 10px 0;
  ${media[0]} {
    font-size: 48px;
  }
`;

const Content = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #dee4ed;
  margin: 8px 0 24px;
`;

const IconArrow = styled.span`
  font-size: 13px;
  line-height: 20px;
  padding-left: 10px;
  display: flex;
`;
