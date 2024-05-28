import Input from "../../../../Components/Input";
import styles from "./styles.module.css";

export default function Form() {
  return (
    <div className={styles.container}>
      <form>
        <Input label="Nome" placeholder="Nome" type="text" />
        <Input label="Nome" placeholder="Nome" type="text" />
        <Input label="Nome" placeholder="Nome" type="text" />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
