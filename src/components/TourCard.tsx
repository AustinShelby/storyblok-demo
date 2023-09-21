import { FC } from "react";
import Link from "next/link";

export const TourCard: FC<{ tour: any }> = ({ tour }) => {
  return (
    <div>
      <Link href={tour.full_slug}>
        <h2>{tour.content.name}</h2>
      </Link>
    </div>
  );
};
