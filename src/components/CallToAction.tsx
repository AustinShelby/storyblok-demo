import { FC } from "react";
import Link from "next/link";

export const CallToAction: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section>
      <h2>{blok.title}</h2>
      <Link href={`/tours/`}>{blok.link_name}</Link>
    </section>
  );
};
