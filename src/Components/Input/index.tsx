import styles from "./styles.module.css";
import InputMask from "react-input-mask";

type InputProps = {
  label: string;
  valor: string;
  isAlterado: (valor: string) => void;
  obrigatorio: boolean;
  type: "text" | "email" | "password" | "number" | "tel";
  mask?: string;
};

/**
 * @description Componente de input
 * @param {string} label - Label do input
 * @param {string} valor - Valor do input
 * @param {(valor: string) => void} isAlterado - Função para alterar o valor do input
 * @param {boolean} obrigatorio - Indica se o input é obrigatório
 * @param {"text" | "email" | "password" | "number" | "tel"} type - Tipo do input
 * @param {string} mask - Máscara do input
 */
export default function Input({
  label,
  valor,
  isAlterado,
  obrigatorio,
  type,
  mask,
}: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <InputMask
        className={styles.input}
        onChange={(e) => isAlterado(e.target.value)}
        value={valor}
        required={obrigatorio}
        type={type}
        mask={mask ? mask : ""}
      />
    </div>
  );
}
