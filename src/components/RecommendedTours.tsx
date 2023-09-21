import { FC } from "react";
import { StoryblokComponent } from "@storyblok/react/rsc";
import { TourCard } from "./TourCard";

export const RecommendedTours: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section>
      <h2>{blok.heading}</h2>
      {blok.tours.map((nestedBlok: any, index: number) => (
        <TourCard tour={nestedBlok} key={nestedBlok.content._uid} />
      ))}
    </section>
  );
};
