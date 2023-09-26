import { FC } from "react";

export const Hero: FC<{ blok: any }> = ({ blok }) => {
  return (
    <section className="bg-blue-50 pt-32 pb-16">
      <div className="layout">
        <h1 className="text-5xl md:text-7xl font-bold font-jakarta text-center">
          {blok.headline}
        </h1>
        <p className="text-center text-xl mt-8">{blok.content}</p>
      </div>
    </section>
  );
};
