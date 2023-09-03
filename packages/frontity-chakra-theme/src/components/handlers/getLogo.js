const getLogo = {
	name: "getLogo",
	pattern: "/image/:slug",
	func: async ({ link, params, state, libraries }) => {
		const { slug } = params;

		const response = await libraries.source.api.get({
			endpoint: `/wp/v2/media/${slug}`,
		});
		const logoData = await response.json();

		state.theme.logo = {
			src: logoData.source_url,
			alt: logoData.alt_text,
			title: logoData.title.rendered,
			caption: logoData.caption.rendered,
			width: logoData.media_details.width,
			height: logoData.media_details.height
		};
	},
};

export default getLogo;