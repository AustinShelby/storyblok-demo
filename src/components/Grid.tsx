import { FC } from "react";
import { StoryblokComponent } from "@storyblok/react/rsc";

export const Grid: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section>
      <h2>{blok.heading}</h2>
      {blok.items.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  );
};
