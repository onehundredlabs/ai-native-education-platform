import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface VideoProps {
  videoId: string;
  title: string;
}

export const Video = ({ videoId, title }: VideoProps) => {
  return <LiteYouTubeEmbed id={videoId} title={title} />;
};
