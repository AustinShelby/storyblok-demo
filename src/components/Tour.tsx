import { FC } from "react";
import { renderRichText, RichTextSchema, ISbNode } from "@storyblok/react/rsc";
import ReactDOMServer from "react-dom/server";
import { Testimonial } from "./Testimonial";

export const Tour: FC<{ blok: any }> = ({ blok }) => {
  return (
    <main className="bg-blue-50">
      <div className="layout pt-32 pb-16">
        <h1 className="text-3xl md:text-5xl font-bold font-jakarta">
          {blok.name}
        </h1>
        <img className="mt-12" src={blok.main_image.filename} alt="" />
        <p className="mt-12 text-lg md:text-2xl leading-relaxed">
          {blok.short_description}
        </p>
        <div
          className="mt-16 prose md:prose-lg prose-headings:font-jakarta max-w-none"
          dangerouslySetInnerHTML={{
            __html: renderRichText(blok.body, {
              resolver: (component, data) => {
                switch (component) {
                  case "testimonial":
                    return ReactDOMServer.renderToStaticMarkup(
                      <div className="not-prose max-w-xl mx-auto w-full my-16">
                        <Testimonial blok={data} />
                      </div>
                    );
                }
              },
              schema: Object.assign({}, RichTextSchema, {
                nodes: {
                  ...RichTextSchema.nodes,
                  image: (node: ISbNode) => ({
                    singleTag: [
                      {
                        tag: `img`,
                        attrs: {
                          src: `${node.attrs.src}/m/672x0`,
                          alt: node.attrs.alt,
                          loading: "lazy",
                          width: node.attrs.src.split("/")[5].split("x")[0],
                          height: node.attrs.src.split("/")[5].split("x")[1],
                        },
                      },
                    ],
                  }),
                },
              }),
            }),
          }}
        ></div>
      </div>
    </main>
  );
};
