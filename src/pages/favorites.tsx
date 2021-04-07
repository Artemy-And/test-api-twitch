import { useEffect, useState } from "react";
import { api } from "../api/api";
import Search from "../components/shared/Search/Search";
import VideoCardList from "../components/shared/Video/Video";
import { setThumbUrl } from "../utils/setThumbUrl";
import { getStoragedVideoIds } from "../utils/storage";
import {CardVideoType} from "./index";

export default function Favorites() {
  const [filter, setFilter] = useState("");
  const [videos, setVideos] = useState<Array<CardVideoType>>([]);
  const [filteredVideos, setFilteredVideos] = useState<Array<CardVideoType>>([]);

  const filterVideos = async (filter: string) => {
    if (!filter) {
      return setFilteredVideos([...videos]);
    }
    const { data } = await api.get(`/search/channels?query=${filter}&first=1`);

    const streamerId = parseInt(data.data[0].id);
    return setFilteredVideos(videos.filter((v) => v.userId === streamerId));
  };

  useEffect(() => {
    const storagedVideoIds: number[] | null = getStoragedVideoIds();
    const videoIdSet = new Set(storagedVideoIds);

    const fetchVideos = async () => {
      try {
        const stringIds = Array.from(videoIdSet).join(",");
        if (!stringIds) {
          return setVideos([]);
        }
        const { data: videosData } = await api.get(`/videos?id=${stringIds}`);

        return setVideos(
          videosData.data.map((v: any) => ({
            id: parseInt(v.id),
            imageUrl: setThumbUrl(v.thumbnail_url, 200, 200),
            videoUrl: v.url,
            title: v.title,
            userId: parseInt(v.user_id),
          }))
        );
      } catch (error) {}
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    filterVideos(filter);
  }, [videos]);

  return (
    <>
      <Search
        value={filter}
        setValue={setFilter}
        onFindClick={() => filterVideos(filter)}
      />
      <VideoCardList videos={filteredVideos} />
    </>
  );
}
