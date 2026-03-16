import { IconChevronRight, IconX } from "@tabler/icons-react";
import type { MouseEventHandler } from "react";
import styles from "./ShortcutButton.module.css";

export const ShortcutButton = ({
  text,
  onClick,
  isSelected,
}: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
}) => {
  return (
    <button
      aria-pressed={isSelected}
      onClick={onClick}
      className={styles["shortcut-button"]}
    >
      <span>{text}</span>
      {isSelected ? <IconX /> : <IconChevronRight />}
    </button>
  );
};
