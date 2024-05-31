import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

/**
 * @description Componente de navegação do sistema
 */
export default function Navbar() {
  const navigation = useNavigate();

  return (
    <nav className={styles.container}>
      <div className={styles.logo} onClick={() => navigation("/")}>
        <Player
          src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
          className={styles.animation}
          loop
          autoplay
        />
        <span>SpaceX</span>
      </div>
      <div className={styles.options}>
        <div className={styles.option} onClick={() => navigation("/list")}>
          <p className={styles.titleOption}>Lista de endereços</p>
        </div>
        <div className={styles.option} onClick={() => navigation("/cadastro")}>
          <p className={styles.titleOption}>Cadastrar endereço</p>
        </div>
      </div>
    </nav>
  );
}
