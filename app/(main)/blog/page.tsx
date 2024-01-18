import { Container } from "@/components/container";

import PostList from "../_components/post-list";

export default function Blog() {
  return (
    <Container className="mt-16">
      <PostList animationDirection="y" />
    </Container>
  );
}
