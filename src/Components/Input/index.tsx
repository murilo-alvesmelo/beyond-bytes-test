import styles from "./styles.module.css";

type InputProps = {
  label: string;
  valor: string;
  isAlterado: (valor: string) => void;
  obrigatorio: boolean;
  placeholder: string;
  type: string;
};

export default function Input({
  label,
  valor,
  isAlterado,
  obrigatorio,
  placeholder,
  type,
}: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        className={styles.input}
        onChange={(e) => isAlterado(e.target.value)}
        value={valor}
        required={obrigatorio}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
