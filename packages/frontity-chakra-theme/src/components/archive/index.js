/* import { loadable } from "frontity";

// Codesplit the list component so it's not included if the users
// load a post directly.
 */
import { connect, styled } from "frontity";
import React from "react";
import Switch from "@frontity/components/switch";
import Partners from "./Partners";
import Archivo from "./archive";
import Ambassadors from "./Ambassadors";
import Rewards from "./Rewards";


const Archive = ({ state }) => {
	const data = state.source.get(state.router.link);
	const next = state.source.data['/news/'].next

	return (
		<PageContainer>
			<Switch>
				<Partners 		when={data.isArchive && state.router.link == "/partners/"} />
				<Archivo 		when={data.isArchive && state.router.link == "/news/" || state.router.link == next } />
				<Ambassadors 	when={data.isArchive && state.router.link == "/ambassadors/"} />
				<Rewards 		when={data.isArchive && state.router.link == "/rewards/"} />
			</Switch>
		</PageContainer>
	);
};

export default connect(Archive);

const PageContainer = styled.div`
  background: #f8f1e7;
  width: 100%;
  display: block;
`;

/* export default loadable(() => import("./archive")); */
