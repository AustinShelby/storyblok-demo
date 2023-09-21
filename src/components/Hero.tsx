import { FC } from "react";

export const Hero: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section>
      <h1>{blok.headline}</h1>
      <p>{blok.content}</p>
      <p>{blok.youtube_video_id}</p>
    </section>
  );
};
