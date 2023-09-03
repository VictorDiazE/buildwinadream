import { connect, styled } from "frontity";
import React from "react";
import Switch from "@frontity/components/switch";
import WinADream from "./pages/winadream/index";
import Faq from "./pages/faq";
import Legal from "./pages/legal";
import Login from "./pages/login";
import Becomeamember from "./pages/becomeamember";
import Contact from "./pages/contact";
import Deleteaccount from "./pages/deleteaccount";
import Rememberpassword from "./pages/rememberpassword";
import FlexiblePage from "./pages/flexiblepage";
/* import Destinos from "./pages/Destinos";
import SobreHanaley from "./pages/SobreHanaley";
import BlankPage from "./pages/BlankPage"; */

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <PageContainer>
      <Switch>
        <WinADream
          when={data.isPage && state.router.link == "/about-win-a-dream/"}
        />
        <Faq when={data.isPage && state.router.link == "/faq/"} />
        <Legal when={data.isPage && state.router.link == "/legal/"} />
        <Login when={data.isPage && state.router.link == "/login/"} />
        <Becomeamember
          when={data.isPage && state.router.link == "/become-a-member/"}
        />
        <Contact when={data.isPage && state.router.link == "/contact-us/"} />
        <Deleteaccount
          when={data.isPage && state.router.link == "/delete-account/"}
        />
        <Rememberpassword
          when={data.isPage && state.router.link == "/remember-password/"}
        />
        <FlexiblePage when={data.isPage} />
      </Switch>
    </PageContainer>
  );
};

export default connect(Page);

const PageContainer = styled.div`
  background: #150f35;
  width: 100%;
  display: block;
`;
