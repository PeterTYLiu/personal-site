import type { ReactNode } from "react";
import { IconBriefcase, IconTools, IconSchool, IconTrophy, IconBrandGithub, IconBrandFigma, IconWorld } from "@tabler/icons-react";
import styles from "./ItemCard.module.scss";

export type ItemType = "work" | "project" | "award" | "education";

export interface Item {
  key: string;
  type: ItemType;
  iconName: string;
  position?: string;
  title: string;
  location?: string;
  description: string;
  bulletPoints?: ReactNode[];
  siteUrl?: string;
  repoUrl?: string;
  figmaUrl?: string;
  tools?: string[];
  startDate?: string;
  endDate: string;
}

const iconSize = 18;
const linkIconSize = 16;

function formatDate(str: string) {
  return new Date(str).toLocaleDateString("en-ca", { year: "numeric", month: "short", timeZone: "UTC" });
}

const itemTypeDict: Record<ItemType, { label: string; icon: ReactNode }> = {
  award: { label: "Award", icon: <IconTrophy size={iconSize} /> },
  education: { label: "Education", icon: <IconSchool size={iconSize} /> },
  project: { label: "Personal Project", icon: <IconTools size={iconSize} /> },
  work: { label: "Work Experience", icon: <IconBriefcase size={iconSize} /> },
};

export default function ItemCard({
  item,
  hidden,
  showType,
  className,
}: {
  item: Item;
  hidden: boolean;
  showType: boolean;
  className: string;
}) {
  const { title, type, position, startDate, endDate, repoUrl, siteUrl, figmaUrl, description, bulletPoints, key, tools, iconName } = item;

  const startDateString = startDate ? formatDate(startDate) : "";
  const endDateString = endDate === "present" ? "present" : formatDate(endDate);

  return (
    <div className={`${styles.wrapper} ${hidden && styles.hidden} ${className}`} hidden={hidden}>
      <div className={styles.icon}>
        <img src={`./images/icons/${iconName}`} loading="lazy" />
      </div>
      <article className={`${styles.article}`} id={key}>
        <header className={styles.header}>
          {showType && (
            <div className={styles.type}>
              {itemTypeDict[type].icon}
              <span>{itemTypeDict[type].label}</span>
            </div>
          )}
          <span className={styles.date}>
            {startDateString}
            {startDateString && " - "}
            {endDateString}
          </span>
        </header>

        <div className={styles.inner}>
          <h2 className={styles.title}>
            {title}
            {!!position && (
              <span className={styles.position}>
                <span>&nbsp;|&nbsp;</span>
                {position}
              </span>
            )}
          </h2>

          <p>{description}</p>
          {!!bulletPoints?.length && (
            <ul className={styles.list}>
              {bulletPoints?.map((b) => (
                <li key={JSON.stringify(b)}>{b}</li>
              ))}
            </ul>
          )}
          {!!tools?.length && (
            <div className={styles.tools}>
              {tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}
          {(siteUrl || repoUrl || figmaUrl) && (
            <div className={styles.links}>
              {siteUrl && (
                <a href={siteUrl} target="_blank">
                  <IconWorld size={linkIconSize} />
                  <span>Site</span>
                </a>
              )}
              {repoUrl && (
                <a href={repoUrl} target="_blank">
                  <IconBrandGithub size={linkIconSize} />
                  <span>Github</span>
                </a>
              )}
              {figmaUrl && (
                <a href={figmaUrl} target="_blank">
                  <IconBrandFigma size={linkIconSize} />
                  <span>Figma</span>
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
