import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import styles from "./App.module.css";
import ItemCard from "./components/ItemCard/ItemCard";
import { ShortcutButton } from "./components/ShortcutButton/ShortcutButton";
import { data } from "./data";
import type { ItemType, Tag } from "./types";

const ALL_ITEMS: ItemType[] = ["work", "award", "project", "education"];

const SHORTCUTS: Array<[string, Tag]> = [
  ["My experience as a senior/founding engineer", "senior"],
  ["My work building design systems", "ds"],
  ["My stints at high-velocity startups", "startup"],
  ["My popular side projects", "gsp"],
];

const itemTypeDict: Record<ItemType, { label: string }> = {
  work: { label: "Work" },
  award: { label: "Awards" },
  project: { label: "Projects" },
  education: { label: "Education" },
};

function App() {
  const [view, setView] = useState<ItemType[]>(ALL_ITEMS);
  const [tag, setTag] = useState<Tag | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineControlsRef = useRef<HTMLDivElement>(null);

  function scrollToTopOfTimeline() {
    const DOMRect = timelineRef.current?.getBoundingClientRect();
    if (DOMRect && DOMRect.top < 0) {
      timelineRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollTimelineToTopOfPage() {
    timelineControlsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <h1>Peter Liu</h1>
        <h2 style={{ fontWeight: 400, fontSize: "18px" }}>
          Full-stack web dev & designer living in beautiful Toronto, Canada
        </h2>
        <p>
          I know you're busy - let's quickly jump to what you're looking for!
        </p>
        <div className={styles.shortcuts}>
          {SHORTCUTS.map((shortcut) => (
            <ShortcutButton
              isSelected={tag === shortcut[1]}
              onClick={() =>
                setTag((prev) => {
                  if (prev === shortcut[1]) {
                    return null;
                  } else {
                    setView(ALL_ITEMS);
                    scrollToTopOfTimeline();
                    scrollTimelineToTopOfPage();
                    return shortcut[1];
                  }
                })
              }
              text={shortcut[0]}
            />
          ))}
        </div>
        <div className={styles.links}>
          <a href="mailto:PeterBuildsStuff@gmail.com" aria-label="Email me">
            <IconMail />
          </a>
          <a
            href="https://github.com/PeterTYLiu"
            target="_blank"
            aria-label="My Github"
          >
            <IconBrandGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/peter-ty-liu"
            target="_blank"
            aria-label="My LinkedIn"
          >
            <IconBrandLinkedin />
          </a>
          <a href="/Peter-Liu-resume-march-2026.pdf" aria-label="My résumé">
            <IconFileCv />
          </a>
        </div>
      </div>
      <div className={styles.timeline} ref={timelineRef}>
        <div className={styles.controls} ref={timelineControlsRef}>
          <button
            className={`${view.length > 1 ? styles.active : ""} ${styles.all}`}
            onClick={() => {
              setView([...ALL_ITEMS]);
              scrollToTopOfTimeline();
              setTag(null);
            }}
          >
            <span>All</span>
          </button>
          {Object.entries(itemTypeDict).map(([key, value]) => {
            return (
              <button
                key={key}
                className={
                  view.includes(key as ItemType) && view.length === 1
                    ? styles.active
                    : undefined
                }
                onClick={() => {
                  scrollToTopOfTimeline();
                  setView([key as ItemType]);
                  setTag(null);
                }}
              >
                <span>{value.label}</span>
              </button>
            );
          })}
        </div>
        <div className={styles["items-wrapper"]}>
          <div className={styles.items}>
            {data
              .sort((a, b) => Date.parse(b.endDate) - Date.parse(a.endDate))
              .map((i) => (
                <ItemCard
                  item={i}
                  key={i.key}
                  hidden={
                    !view.includes(i.type) ||
                    (tag !== null && !i.tags?.includes(tag))
                  }
                  showType={view.length > 1}
                  className={styles[i.type]}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
