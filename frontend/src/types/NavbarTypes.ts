import { ReactElement } from "react";

export interface NavItem {
  to: string;
  text: string;
}

export interface IconItem {
  to: string;
  component: ReactElement;
}
