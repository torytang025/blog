import { PortableTextComponentProps } from "@portabletext/react";
import YouTubePlayer from "react-player/youtube";

export function PortableTextYouTube(
  props: PortableTextComponentProps<{
    url: string;
  }>
) {
  const { value } = props;
  const url = value.url;
  return (
    <div className="h-96">
      <YouTubePlayer url={url} width="100%" height="100%" />
    </div>
  );
}
