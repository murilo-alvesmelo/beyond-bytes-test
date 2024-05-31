import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../../Components/ButtonPrimary";
import styles from "./styles.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

/**
 * @description Tela inicial do sistema
 */
export default function InitialScreen() {
  const navigation = useNavigate();

  /**
   * @description Função que redireciona o usuário para a tela de listagem de endereços
   */
  const handleStart = () => {
    navigation("/list");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>
          Bem vindo ao SpaceX, o melhor delivery interplanetário! 💫
        </p>
        <ButtonPrimary title="Começar" isFunction={handleStart} />
      </div>
      <Player
        src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
        className={styles.animation}
        loop
        autoplay
      />
    </div>
  );
}
