import { Container } from "@/components/container";

import PostList from "../components/post-list";

export const revalidate = 60;

export default function Blog() {
  return (
    <Container className="mt-16">
      <PostList animationDirection="y" type="card" />
    </Container>
  );
}
