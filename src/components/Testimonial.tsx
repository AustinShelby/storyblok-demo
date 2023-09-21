import { FC } from "react";

export const Testimonial: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section>
      <p>{blok.name}</p>
      <p>{blok.testimonial}</p>
    </section>
  );
};
