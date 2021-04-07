import VideoCardList from "../components/shared/Video/Video";
import Search from "../components/shared/Search/Search";
import { useState } from "react";
import { api } from "../api/api";
import { setThumbUrl } from "../utils/setThumbUrl";


export type CardVideoType = {
    id: number;
    imageUrl: string;
    videoUrl: string;
    title: string;
    userId: number;
};

export default function IndexPage() {
  const [filter, setFilter] = useState("");
  const [videos, setVideos] = useState<Array<CardVideoType>>([]);
  const fetchVideos = async (userName: string) => {
    try {
      if (userName.trim().length > 0) {
        const { data } = await api.get(`/search/channels?query=${userName}&first=1`);
        const streamerId = data.data[0].id;
        const { data: videosData } = await api.get(`/videos?user_id=${streamerId}`);
        setVideos(
          videosData.data.map((v: any) => ({
            id: parseInt(v.id),
            imageUrl: setThumbUrl(v.thumbnail_url, 200, 200),
            videoUrl: v.url,
            title: v.title,
            userId: parseInt(v.user_id),
          }))
        );
      }
    } catch (error) {}
  };

  return (
    <>
      <Search
        value={filter}
        setValue={setFilter}
        onFindClick={fetchVideos}
      />
      <VideoCardList videos={videos} />
    </>
  );
}
