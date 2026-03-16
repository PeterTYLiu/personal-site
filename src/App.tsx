import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconFileCv,
  IconMail,
  IconSchool,
  IconTools,
  IconTrophy,
} from "@tabler/icons-react";
import { type ReactNode, useRef, useState } from "react";
import styles from "./App.module.css";
import ItemCard, { type ItemType } from "./components/ItemCard/ItemCard";
import { data } from "./data";

const iconSize = 20;

const allItems: ItemType[] = ["work", "award", "project", "education"];

const itemTypeDict: Record<ItemType, { label: string; icon: ReactNode }> = {
  work: { label: "Work", icon: <IconBriefcase size={iconSize} /> },
  award: { label: "Awards", icon: <IconTrophy size={iconSize} /> },
  project: { label: "Projects", icon: <IconTools size={iconSize} /> },
  education: { label: "Education", icon: <IconSchool size={iconSize} /> },
};

function App() {
  const [view, setView] = useState<ItemType[]>(allItems);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  function scrollToTopOfTimeline() {
    const DOMRect = timelineRef.current?.getBoundingClientRect();
    if (DOMRect && DOMRect.top < 0) {
      timelineRef.current?.scrollIntoView({ behavior: "smooth" });
    }
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
        <ul>
          <li>My experience as a senior/founding developer</li>
          <li>My work building design systems</li>
          <li>My many stints at high-velocity startups</li>
          <li>My high-traffic side projects</li>
        </ul>
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
          <a href="/peter-liu-resume.pdf" aria-label="My résumé">
            <IconFileCv />
          </a>
        </div>
      </div>
      <div className={styles.timeline} ref={timelineRef}>
        <div className={styles.controls}>
          <button
            className={`${view.length > 1 ? styles.active : ""} ${styles.all}`}
            onClick={() => {
              setView([...allItems]);
              scrollToTopOfTimeline();
            }}
          >
            <span>All</span>
          </button>
          {Object.entries(itemTypeDict).map(([key, value]) => {
            return (
              <button
                key={key}
                className={`${
                  view.includes(key as ItemType) && view.length === 1
                    ? styles.active
                    : ""
                } ${styles[key]}`}
                onClick={() => {
                  scrollToTopOfTimeline();
                  setView([key as ItemType]);
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
                  hidden={!view.includes(i.type)}
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
