import styles from "./styles.module.css";

export default function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        className={styles.input}
        onChange={(e) => props.isAlterado(e.target.value)}
        value={props.valor}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
}
