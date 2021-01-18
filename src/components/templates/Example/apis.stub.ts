import { rest } from "msw";
import type { ServerProps } from "./";

export const data: ServerProps = [
  {
    id: "0",
    title: "Train",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae deleniti? Labore eligendi laudantium quae, ducimus omnis accusamus, ullam velit qui minima, vel asperiores maiores laborum eaque repellat doloremque esse.",
    img: { src: "/images/wintry-3758523_640.jpg" },
  },
  {
    id: "1",
    title: "Train",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae deleniti? Labore eligendi laudantium quae, ducimus omnis accusamus, ullam velit qui minima, vel asperiores maiores laborum eaque repellat doloremque esse.",
    img: { src: "/images/wintry-3758523_640.jpg" },
  },
  {
    id: "2",
    title: "Train",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae deleniti? Labore eligendi laudantium quae, ducimus omnis accusamus, ullam velit qui minima, vel asperiores maiores laborum eaque repellat doloremque esse.",
    img: { src: "/images/wintry-3758523_640.jpg" },
  },
  {
    id: "3",
    title: "Train",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae deleniti? Labore eligendi laudantium quae, ducimus omnis accusamus, ullam velit qui minima, vel asperiores maiores laborum eaque repellat doloremque esse.",
    img: { src: "/images/wintry-3758523_640.jpg" },
  },
  {
    id: "4",
    title: "Train",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae deleniti? Labore eligendi laudantium quae, ducimus omnis accusamus, ullam velit qui minima, vel asperiores maiores laborum eaque repellat doloremque esse.",
    img: { src: "/images/wintry-3758523_640.jpg" },
  },
  {
    id: "5",
    title: "Train",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae deleniti? Labore eligendi laudantium quae, ducimus omnis accusamus, ullam velit qui minima, vel asperiores maiores laborum eaque repellat doloremque esse.",
    img: { src: "/images/wintry-3758523_640.jpg" },
  },
  {
    id: "6",
    title: "Train",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae deleniti? Labore eligendi laudantium quae, ducimus omnis accusamus, ullam velit qui minima, vel asperiores maiores laborum eaque repellat doloremque esse.",
    img: { src: "/images/wintry-3758523_640.jpg" },
  },
  {
    id: "7",
    title: "Train",
    body:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae deleniti? Labore eligendi laudantium quae, ducimus omnis accusamus, ullam velit qui minima, vel asperiores maiores laborum eaque repellat doloremque esse.",
    img: { src: "/images/wintry-3758523_640.jpg" },
  },
];

const handlers = [
  rest.get("/api/example", (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];

export default handlers;
