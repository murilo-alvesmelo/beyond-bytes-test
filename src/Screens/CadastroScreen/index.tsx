import styles from "./styles.module.css";
import Form from "./Components/Form";
import InfoCadastro from "./Components/Info";

export default function CadastroScreen() {
  return (
    <div className={styles.container}>
      <InfoCadastro />
      <Form />
    </div>
  );
}
