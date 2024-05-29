import styles from "./styles.module.css";

type InputProps = {
  label: string;
  valor: string;
  isAlterado: (valor: string) => void;
  obrigatorio: boolean;
  type: string;
};

export default function Input({
  label,
  valor,
  isAlterado,
  obrigatorio,
  type,
}: InputProps) {
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        onChange={(e) => isAlterado(e.target.value)}
        value={valor}
        required={obrigatorio}
        type={type}
      />
    </div>
  );
}
