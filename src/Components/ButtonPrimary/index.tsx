import styles from "./styles.module.css";

type ButtonProps = {
  title: string;
  isFunction: () => void;
};

/**
 * @description Botão primário do sistema
 * @param {string} title - Título do botão
 * @param {function} isFunction - Função a ser executada ao clicar no botão
 */
export default function ButtonPrimary({ title, isFunction }: ButtonProps) {
  return (
    <button className={styles.button} title={title} onClick={isFunction}>
      {title}
    </button>
  );
}
