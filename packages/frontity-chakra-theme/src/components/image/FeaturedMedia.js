import { connect, styled, css } from "frontity";
import Image from "@frontity/components/image";

/**
 * The Component that renders a featured media, typically an image. The featured
 * media can represent an individual Projects Type.
 *
 * @param props - The state injected by {@link connect } and the ID of the
 * featured media.
 *
 * @returns A react component.
 */
const FeaturedMedia = ({ state, id, height = "auto" }) => {
  const media = state.source.attachment[id];
  return (
      <Image
        alt={media.title.rendered}
        src={media.source_url}
        width={media?.media_details?.width}
        height={media?.media_details?.height}
      />
  );
};

export default connect(FeaturedMedia);
