import styles from "./styles.module.css";

type InputProps = {
  label: string;
  valor: string;
  isAlterado: (valor: string) => void;
  obrigatorio: boolean;
  type: "text" | "email" | "password" | "number" | "tel";
  maxLength?: number;
};

export default function Input({
  label,
  valor,
  isAlterado,
  obrigatorio,
  type,
  maxLength,
}: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        maxLength={maxLength}
        className={styles.input}
        onChange={(e) => isAlterado(e.target.value)}
        value={valor}
        required={obrigatorio}
        type={type}
      />
    </div>
  );
}
