import type { ReactNode } from "react";

export type Tag = "senior" | "ds" | "startup" | "gsp";

export type ItemType = "work" | "project" | "award" | "education";

export interface Item {
  key: string;
  type: ItemType;
  iconName: string;
  position?: string;
  title: string;
  location?: string;
  description?: string;
  bulletPoints?: ReactNode[];
  siteUrl?: string;
  repoUrl?: string;
  figmaUrl?: string;
  tools?: string[];
  startDate?: string;
  endDate: string;
  tags?: Tag[];
}
