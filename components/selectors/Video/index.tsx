import { useNode, useEditor } from "@craftjs/core";
import { PictureInPicture } from "@material-ui/icons";
import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

import { VideoSettings } from "./VideoSettings";

const Picture = styled.div<any>`
  width: 100%;
  height: 100%;
  > div {
    height: 100%;
  }
  iframe {
    pointer-events: ${(props) => (props.enabled ? "none" : "auto")};
    // width:100%!important;
    // height:100%!important;
  }
`;

export const Video = (props: any) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { videoId } = props;

  return (
    // <YoutubeDiv ref={connect} enabled={enabled}>
    //   <YouTube
    //     videoId={videoId}
    //     opts={{
    //       width: '100%',
    //       height: '100%',
    //     }}
    //   />
    // </YoutubeDiv>
    <Picture ref={connect} enabled={enabled}>
      <img src={videoId} style={{ width: "100%", height: "100%" }} />
    </Picture>
  );
};

Video.craft = {
  displayName: "Image",
  props: {
    videoId:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
  },
  related: {
    toolbar: VideoSettings,
  },
};
