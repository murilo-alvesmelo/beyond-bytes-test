import styles from "./styles.module.css";

type SelectProps = {
  label: string;
  valor: string;
  isAlterado: (valor: string) => void;
  obrigatorio: boolean;
  itens: string[];
};

/**
 * @description Componente de select
 * @param {string} label - Label do select
 * @param {string} valor - Valor do select
 * @param {function} isAlterado - Função a ser executada ao alterar o select
 * @param {boolean} obrigatorio - Se o campo é obrigatório
 * @param {string[]} itens - Itens do select
 */
export default function Select({
  label,
  valor,
  isAlterado,
  obrigatorio,
  itens,
}: SelectProps) {
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.input}
        value={valor}
        required={obrigatorio}
        onChange={(e) => isAlterado(e.target.value)}
      >
        <option value="" disabled selected>
          Escolha
        </option>
        {itens.map((i) => {
          return <option key={i}>{i}</option>;
        })}
      </select>
    </div>
  );
}
