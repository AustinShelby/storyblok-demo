import { TourCard } from "@/components/TourCard";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {});
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    <div>
      <StoryblokStory story={story} />
      <div className="bg-blue-50">
        <div className="layout grid md:grid-cols-2 component gap-8 py-16">
          {tours.map((tour) => (
            <TourCard tour={tour} key={tour.content._uid} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
