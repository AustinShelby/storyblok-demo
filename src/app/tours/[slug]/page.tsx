import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokStory } from "@storyblok/react/rsc";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
  });
  return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {});
  return response.data.story;
};

const TourPage = async (props: { params: { slug: string } }) => {
  const story = await fetchTourPage(props.params.slug);
  return (
    <div>
      <StoryblokStory story={story} />
    </div>
  );
};

export default TourPage;
