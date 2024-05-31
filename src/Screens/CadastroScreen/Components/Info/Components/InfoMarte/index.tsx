import { InfoMarteProps } from "../../../../../../types";
import styles from "../../styles.module.css";

export default function InfoMarte({
  destinatario,
  contato,
  planeta,
  lote,
  fabrica,
}: InfoMarteProps) {
  return (
    <div className={styles.infoContainer}>
      <span className={styles.span}>
        <strong>Destinatário:</strong> {destinatario}
      </span>
      <span className={styles.span}>
        <strong>Contato:</strong> {contato}
      </span>
      <span className={styles.span}>
        <strong>Planeta:</strong> {planeta}
      </span>
      <span className={styles.span}>
        <strong>Fábrica:</strong> {fabrica}
      </span>
      <span className={styles.span}>
        <strong>Lote:</strong> {lote}
      </span>
    </div>
  );
}
