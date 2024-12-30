import VideoComp from "./VideoComp";
import videoData from "../src/videoData";
export default function MainContent() {
  const videoElement = videoData.map((value) => {
    return (
      <VideoComp
        src={value.img.src}
        title={value.videoTitle}
        channelName={value.channelName}
        videoViews = {value.videoViews}
        uploadDate = {value.uploadDate}
      />
    );
  });
  return videoElement;
}
