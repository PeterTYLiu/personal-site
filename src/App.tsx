import { type ReactNode, useState } from "react";
import styles from "./App.module.scss";
import ItemCard, { type ItemType } from "./components/ItemCard/ItemCard";
import { data } from "./data";
import { IconBriefcase, IconSchool, IconTools, IconTrophy } from "@tabler/icons-react";

const iconSize = 20;

const defaultView: ItemType[] = ["work", "award", "project", "education"];

const itemTypeDict: Record<ItemType, { label: string; icon: ReactNode }> = {
  award: { label: "Awards", icon: <IconTrophy size={iconSize} /> },
  education: { label: "Education", icon: <IconSchool size={iconSize} /> },
  project: { label: "Personal Projects", icon: <IconTools size={iconSize} /> },
  work: { label: "Work Experience", icon: <IconBriefcase size={iconSize} /> },
};

function App() {
  const [view, setView] = useState<ItemType[]>(defaultView);

  return (
    <main>
      <div></div>
      <div className={styles.timeline}>
        <div className={styles.controls}>
          <button className={`${view.length > 1 ? styles.active : ""} ${styles.all}`} onClick={() => setView([...defaultView])}>
            <span>All</span>
          </button>
          {Object.entries(itemTypeDict).map(([key, value]) => {
            return (
              <button
                key={key}
                className={`${view.includes(key as ItemType) && view.length === 1 ? styles.active : ""} ${styles[key]}`}
                onClick={() => setView([key as ItemType])}
              >
                {value.icon}
                <span>{value.label}</span>
              </button>
            );
          })}
        </div>
        <div className={styles.items}>
          {data
            .sort((a, b) => Date.parse(b.endDate) - Date.parse(a.endDate))
            .map((i) => (
              <ItemCard item={i} key={i.key} visible={view.includes(i.type)} showType={view.length > 1} className={styles[i.type]} />
            ))}
        </div>
      </div>
    </main>
  );
}

export default App;
