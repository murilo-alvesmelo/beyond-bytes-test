import styles from "./styles.module.css";
import marte from "../../../../assets/marte.png";
import terra from "../../../../assets/terra.png";
import FormType from "../../../../types";
import InfoTerra from "./Components/InfoTerra";
import InfoMarte from "./Components/InfoMarte";

export default function InfoCadastro({ form }: { form: FormType }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Informações de destino</h2>
      {form.planeta && (
        <div className={styles.imgContainer}>
          <img
            src={form.planeta === "Terra" ? terra : marte}
            alt="Imagem"
            className={styles.img}
          />
        </div>
      )}
      {form.planeta === "Terra" ? (
        <InfoTerra
          destinatario={form.destinatario}
          contato={form.contato}
          planeta={form.planeta}
          cep={form.cep}
          logradouro={form.logradouro}
          bairro={form.bairro}
          uf={form.uf}
          cidade={form.cidade}
          pais={form.pais}
        />
      ) : (
        <InfoMarte
          destinatario={form.destinatario}
          contato={form.contato}
          planeta={form.planeta}
          lote={form.lote}
          fabrica={form.fabrica}
        />
      )}
    </div>
  );
}
