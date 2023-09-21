import { FC } from "react";
import { renderRichText } from "@storyblok/react/rsc";

export const Tour: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section>
      <h1>{blok.name}</h1>
      <p>{blok.short_description}</p>
      <img src={blok.main_image.filename} alt="" />
      <div
        dangerouslySetInnerHTML={{ __html: renderRichText(blok.body) }}
      ></div>
    </section>
  );
};
