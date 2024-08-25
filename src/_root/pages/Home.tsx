import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import UserCard from "@/components/shared/UserCard";
import {
  // useGetPosts,
  useGetRecentPosts,
  useGetUsers,
} from "@/lib/react-query/queriesAndMutation";
import { Models } from "appwrite";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const {
    data: posts,
    isPending: isPostLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetRecentPosts();

  const { data: creators, isPending: isUserLoading } = useGetUsers(10);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col gap-9 flex-1 w-full">
            {posts?.pages.map((page) =>
              page?.documents.map((post: Models.Document) => (
                <PostCard key={post.$id} post={post} />
              ))
            )}
          </ul>
          )}
          {hasNextPage ? (
            <div ref={ref} className="mt-10">
              <Loader />
            </div>
          ) : null}
        </div>
      </div>
      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
        <div className="text-xs mb-2 px-10 text-blue-500 text-center ">
          ` Note: The follow feature is currently just a frontend demo and not
          functional. `{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
