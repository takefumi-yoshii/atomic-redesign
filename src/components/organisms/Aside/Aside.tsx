import * as React from "react";
import { Navigation } from "../Navigation";
// _____________________________________________________________________________
//
interface Props {
  className?: string;
}
// _____________________________________________________________________________
//
export const Aside: React.FC<Props> = (props) => (
  <aside className={props.className}>
    <Navigation />
  </aside>
);
