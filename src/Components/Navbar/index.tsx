import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigation = useNavigate();
  return (
    <nav className={styles.container}>
      <div className={styles.option} onClick={() => navigation("/list")}>
        <h2>Lista de endereços</h2>
      </div>
      <div className={styles.option} onClick={() => navigation("/cadastro")}>
        <h2>Cadastrar endereço</h2>
      </div>
    </nav>
  );
}
