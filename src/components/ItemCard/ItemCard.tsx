import {
  IconBrandFigma,
  IconBrandGithub,
  IconWorld,
} from "@tabler/icons-react";
import type { Item, ItemType } from "../../types";
import styles from "./ItemCard.module.css";

const LINK_ICON_SIZE = 16;

function formatDate(str: string) {
  return new Date(str).toLocaleDateString("en-ca", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

const itemTypeDict: Record<ItemType, { label: string }> = {
  award: { label: "Award" },
  education: { label: "Education" },
  project: { label: "Personal Project" },
  work: { label: "Work" },
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
  const {
    title,
    type,
    position,
    startDate,
    endDate,
    repoUrl,
    siteUrl,
    figmaUrl,
    description,
    bulletPoints,
    key,
    tools,
  } = item;

  const startDateString = startDate ? formatDate(startDate) : "";
  const endDateString = endDate === "present" ? "present" : formatDate(endDate);

  return (
    <div
      className={`${styles.wrapper} ${hidden && styles.hidden} ${className}`}
      hidden={hidden}
    >
      <article className={`${styles.article}`} id={key}>
        <div className={styles.inner}>
          <div className={styles.date}>
            <span>
              {showType && <span>{itemTypeDict[type].label}: </span>}
              <span className={styles.date}>
                {startDateString}
                {startDateString && " to "}
                {endDateString}
              </span>
            </span>
          </div>
          <h2 className={styles.title}>
            {title}
            {!!position && (
              <span className={styles.position}>
                <span>&nbsp;/&nbsp;</span>
                {position}
              </span>
            )}
          </h2>

          {description && <p>{description}</p>}
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
                  <IconWorld size={LINK_ICON_SIZE} />
                  <span>Visit</span>
                </a>
              )}
              {repoUrl && (
                <a href={repoUrl} target="_blank">
                  <IconBrandGithub size={LINK_ICON_SIZE} />
                  <span>Github</span>
                </a>
              )}
              {figmaUrl && (
                <a href={figmaUrl} target="_blank">
                  <IconBrandFigma size={LINK_ICON_SIZE} />
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
