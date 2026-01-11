import {
  IconBriefcase,
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
  project: { label: "Personal Projects", icon: <IconTools size={iconSize} /> },
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
        <p>
          Hi! I'm <strong>Peter Liu</strong>, a full-stack web developer and UI
          designer living in beautiful Toronto, Canada.
        </p>
        <p>
          At <strong>Leap Tools</strong>, I led a design systems team, used by
          dozens of developers, and customized by hundred of clients, including
          Home Depot, Costco, and Redfin.
        </p>
        <p>
          As a UX consultant, I've worked with clients including Samsung and
          Crate & Barrel to design custom 3D/AR shopping experiences.
        </p>
        <p>
          At Threekit, I worked closely with engineering to design their{" "}
          <a
            href="https://www.threekit.com/en/platform-overview"
            target="_blank"
            rel="noreferrer"
          >
            3D rendering interface
          </a>{" "}
          from the ground up, as well as a{" "}
          <a
            href="https://developer.threekit.com/reference/treble"
            target="_blank"
            rel="noreferrer"
          >
            React component library
          </a>{" "}
          and{" "}
          <a
            href="https://www.figma.com/community/file/1027317639278516141/Threekit-React-Dev-Kit-Design-System"
            target="_blank"
            rel="noreferrer"
          >
            design system
          </a>
          .
        </p>
        <p>
          My side projects have reached the{" "}
          <a
            href="https://news.ycombinator.com/item?id=36019354"
            target="_blank"
            rel="noreferrer"
          >
            front page of Hacker News
          </a>{" "}
          and{" "}
          <a
            href="https://www.reddit.com/r/webdev/comments/13nc54m/i_made_a_3d_editor_that_models_in_pure_csshtml/"
            target="_blank"
            rel="noreferrer"
          >
            blown up on Reddit
          </a>
          . I love TypeScript, cutting-edge CSS, and{" "}
          <a href="https://css-tricks.com/using-the-platform/">
            using the platform
          </a>
          .
        </p>
        <hr />
        <p>
          Get in touch at{" "}
          <a href="mailto:peterbuildsstuff@gmail.com">
            PeterBuildsStuff@gmail.com
          </a>
          . Also check out my <a href="https://github.com/PeterTYLiu">Github</a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/peter-ty-liu/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          pages.
        </p>
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
            <span>Everything</span>
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
                {value.icon}
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
