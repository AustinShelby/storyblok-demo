import { FC } from "react";

export const HeroAlt: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section>
      <h1>{blok.heading}</h1>
    </section>
  );
};
