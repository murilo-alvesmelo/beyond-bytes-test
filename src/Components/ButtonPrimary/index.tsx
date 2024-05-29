import styles from "./styles.module.css";

type ButtonProps = {
  title: string;
  isFunction?: () => void;
  type?: "button" | "submit" | "reset";
};

/**
 * @description Botão primário do sistema
 * @param {string} title - Título do botão
 * @param {function} isFunction - Função a ser executada ao clicar no botão
 * @param {string} type - Tipo do botão
 */
export default function ButtonPrimary({
  title,
  isFunction,
  type,
}: ButtonProps) {
  return (
    <button
      className={styles.button}
      title={title}
      onClick={isFunction}
      type={type}
    >
      {title}
    </button>
  );
}
