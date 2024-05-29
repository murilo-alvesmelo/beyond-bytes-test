import { InfoTerraProps } from "../../../../../../types";
import styles from "../../styles.module.css";

export default function InfoTerra({
  destinatario,
  contato,
  planeta,
  cep,
  logradouro,
  bairro,
  uf,
  cidade,
  pais,
}: InfoTerraProps) {
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
        <strong>CEP:</strong> {cep}
      </span>
      <span className={styles.span}>
        <strong>Logradouro:</strong> {logradouro}
      </span>
      <span className={styles.span}>
        <strong>Bairro:</strong> {bairro}
      </span>
      <span className={styles.span}>
        <strong>Cidade:</strong> {cidade}
      </span>
      <span className={styles.span}>
        <strong>UF:</strong> {uf}
      </span>
      <span className={styles.span}>
        <strong>País:</strong> {pais}
      </span>
    </div>
  );
}
