import { FC } from "react";

export const Feature: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section>
      <h3>{blok.title}</h3>
      <p>{blok.content}</p>
    </section>
  );
};
