import React from "react";
import { Wrapper, Cards } from "./Video.styled";
import Card from "../Card/Card";
import {CardVideoType} from "../../../pages";

type PropsType = {
  videos: Array<CardVideoType>;
};

const VideoCardList: React.FC<PropsType> = ({ videos }) => {
  return (
    <Wrapper>
      <Cards>
        {videos.map((video) => (
          <Card
            key={video.id}
            src={video.imageUrl}
            title={video.title}
            href={video.videoUrl}
            id={video.id}
          />
        ))}
      </Cards>
    </Wrapper>
  );
};

export default VideoCardList;
