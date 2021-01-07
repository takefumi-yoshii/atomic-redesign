import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ThumbnailCard } from "./ThumbnailCard";

storiesOf("molecules/ThumbnailCard", module).add("default", () => (
  <ThumbnailCard
    {...{
      title: "Train",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae deleniti? Labore eligendi laudantium quae, ducimus omnis accusamus, ullam velit qui minima, vel asperiores maiores laborum eaque repellat doloremque esse.",
      img: { src: "/images/wintry-3758523_640.jpg" },
    }}
  />
));
