import Link from "next/link";
import * as React from "react";
// _____________________________________________________________________________
//
interface Props {
  className?: string;
}
// _____________________________________________________________________________
//
const Navigation = (props: Props) => (
  <ul className={props.className}>
    <li>
      <Link href="/" prefetch={!process.env.STORYBOOK}>
        <a>TOP</a>
      </Link>
    </li>
    <li>
      <Link href="/about" prefetch={!process.env.STORYBOOK}>
        <a>About</a>
      </Link>
    </li>
    <li>
      <Link href="/example" prefetch={!process.env.STORYBOOK}>
        <a>Example</a>
      </Link>
    </li>
  </ul>
);
// _____________________________________________________________________________
//
export { Navigation };
