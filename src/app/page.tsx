import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory("home", {
    resolve_relations: "recommended_tours.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();
  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
};

export default HomePage;
