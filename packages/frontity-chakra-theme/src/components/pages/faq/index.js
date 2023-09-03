import { connect, styled } from "frontity";
import Faqs from "../../faqs";

const Faq = ({ state, actions, ...props }) => {
  const data = state.source.get(state.router.link);
  const id = data.id;
  const afc = state.source[data.type][id]?.acf;
  const cta = props?.cta;

  return <Faqs afc={afc} cta="true" />;
};

export default connect(Faq);
