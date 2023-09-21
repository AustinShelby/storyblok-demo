// export const generateStaticParams = async () => {
//   return [{ slug: "abc" }, { slug: "123" }];
// };

import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokStory } from "@storyblok/react/rsc";

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
