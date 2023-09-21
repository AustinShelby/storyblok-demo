"use client";
import type { PropsWithChildren, FC } from "react";
import { storyblokInit, SbBlokData } from "@storyblok/react/rsc";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Tour } from "./Tour";
import { Grid } from "./Grid";
import { Feature } from "./Feature";
import { Testimonial } from "./Testimonial";
import { CallToAction } from "./CallToAction";
import { RecommendedTours } from "./RecommendedTours";
import { HeroAlt } from "./HeroAlt";

storyblokInit({
  components: {
    page: Page,
    hero: Hero,
    tour: Tour,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    call_to_action: CallToAction,
    recommended_tours: RecommendedTours,
    hero_alt: HeroAlt,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
