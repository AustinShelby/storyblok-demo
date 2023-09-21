import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>
          <p className="text-red-500">Layout</p>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
