import { FC } from "react";
import { StoryblokComponent } from "@storyblok/react/rsc";
import { TourCard } from "./TourCard";

export const RecommendedTours: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="layout">
        <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-center">
          {blok.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {blok.tours.map((nestedBlok: any, index: number) => (
            <TourCard tour={nestedBlok} key={nestedBlok.content._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};
