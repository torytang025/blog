import { PortableTextComponentProps } from "@portabletext/react";
import dynamic from "next/dynamic";

// https://github.com/cookpete/react-player/issues/1474#issuecomment-1184645105
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export function PortableTextYouTube(
  props: PortableTextComponentProps<{
    url: string;
  }>
) {
  const { value } = props;
  const url = value.url;
  return (
    <div className="h-96">
      <ReactPlayer url={url} width="100%" height="100%" />
    </div>
  );
}
