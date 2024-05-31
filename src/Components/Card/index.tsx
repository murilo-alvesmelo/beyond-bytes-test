import styles from "./styles.module.css";
import ButtonSecondary from "../ButtonSecondary";
import terra from "../../assets/terra.png";
import marte from "../../assets/marte.png";
import FormType from "../../types";

type CardProps = {
  planeta: string;
  destinatario: string;
  contato: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  fabrica: string;
  lote: string;
  form: FormType;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  deleteEndereco: () => void;
  setFormEdit: (form: FormType) => void;
};

export default function Card({
  planeta,
  destinatario,
  contato,
  logradouro,
  bairro,
  cidade,
  uf,
  fabrica,
  lote,
  form,
  setOpenModal,
  deleteEndereco,
  setFormEdit,
}: CardProps) {
  return (
    <div className={styles.container}>
      <img
        src={planeta === "Terra" ? terra : marte}
        alt="Terra"
        className={styles.img}
      />
      <div className={styles.divInfo}>
        <div>
          <span className={styles.fontG}>{destinatario}</span>
        </div>
        <div>
          <span className={styles.fontM}>{contato}</span>
        </div>
        {planeta === "Terra" ? (
          <div>
            <span className={styles.fontP}>
              {logradouro + ", " + bairro + ", " + cidade + " - " + uf}
            </span>
          </div>
        ) : (
          <div>
            <span className={styles.fontP}>{fabrica + ", " + lote}</span>
          </div>
        )}
        <div className={styles.divButton}>
          <ButtonSecondary
            title="Editar"
            isFunction={() => {
              setOpenModal(true);
              setFormEdit(form);
            }}
          />
          <ButtonSecondary title="Excluir" isFunction={deleteEndereco} />
        </div>
      </div>
    </div>
  );
}
