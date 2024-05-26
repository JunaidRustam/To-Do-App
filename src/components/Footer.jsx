import styles from "./footer.module.css";
export default function Footer({ completeTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos is :{completeTodos}</span>
      <span className={styles.item}>Total Todos is :{totalTodos}</span>
    </div>
  );
}
