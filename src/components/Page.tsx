import { FC } from "react";
import { StoryblokComponent, SbBlokData } from "@storyblok/react/rsc";

export const Page: FC<{ blok: any }> = ({ blok }) => {
  return (
    <main>
      {blok.blocks.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
