import { FC } from "react";
import { StoryblokComponent } from "@storyblok/react/rsc";

export const Grid: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section className={`bg-blue-100 py-16`}>
      <div className="layout">
        <h2 className="text-3xl md:text-4xl font-jakarta font-bold">
          {blok.heading}
        </h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {blok.items.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
};
