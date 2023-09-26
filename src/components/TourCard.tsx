import { FC } from "react";
import Link from "next/link";

export const TourCard: FC<{ tour: any }> = ({ tour }) => {
  return (
    <div className="bg-white rounded overflow-hidden shadow relative">
      <div className="relative">
        <img
          className="aspect-square object-cover w-full"
          src={tour.content.main_image.filename}
          alt=""
        />
      </div>
      <div className="p-4 md:p-8">
        <div className="flex gap-4 justify-between items-baseline text-lg lg:text-2xl font-jakarta font-bold">
          <h3>{tour.content.name}</h3>
          <p>
            {Number(tour.content?.price).toLocaleString("en-US", {
              style: "currency",
              currency: "TWD",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 stroke-current text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="text-gray-400 uppercase font-bold ml-2 text-xs lg:text-sm tracking-wide">
            {tour.content.location}, Taiwan
          </p>
        </div>
        <p className="font-bold text-sm lg:text-base mt-8 align-bottom">
          View Tour {">"}
        </p>
      </div>
      <Link className="absolute inset-0" href={tour.full_slug}></Link>
    </div>
  );
};
