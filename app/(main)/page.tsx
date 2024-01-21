import { Container } from "@/components/container";

import PhotoWall from "./components/photo-wall";
import PostList from "./components/post-list";
import Profile from "./components/profile";

export const revalidate = 60;

export default function IndexPage() {
  return (
    <>
      <PhotoWall className="mt-12" />
      <Container className="mt-8 md:mt-16">
        <div className="flex flex-col justify-center gap-y-12 md:flex-row md:gap-x-16">
          <div className="flex flex-1 justify-start md:justify-end">
            <Profile />
          </div>
          <div className="flex flex-1 justify-start">
            <PostList />
          </div>
        </div>
      </Container>
    </>
  );
}
