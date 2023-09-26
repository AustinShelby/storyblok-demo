import { FC } from "react";

export const Testimonial: FC<{ blok: any }> = ({ blok }) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <p className="text-lg">{blok.testimonial}</p>
      <div className="flex items-center gap-4 mt-6">
        <img
          src={blok.picture.filename}
          className="w-8 h-8 rounded-full"
          alt=""
        />
        <p className="text-xl font-bold font-jakarta">{blok.name}</p>
      </div>
    </div>
  );
};
