import styles from "./Badge.module.css";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "amber" | "cyan" | "neutral";
};

export default function Badge({ children, tone = "neutral" }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
