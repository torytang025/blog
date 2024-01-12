import { PortableText } from "@portabletext/react";

export const PostPortableText: typeof PortableText = (props) => {
  return (
    <PortableText
      value={props.value}
      // components={props.components ?? components}
    />
  );
};
