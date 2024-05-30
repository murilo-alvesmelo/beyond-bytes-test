import Card from "../../Components/Card";
import styles from "./styles.module.css";
import undrawDrone from "../../assets/undrawDrone.png";
import FormType from "../../types";

export default function ListScreen({ enderecos }: { enderecos: FormType[] }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Endereços cadastrados</h1>
      <div className={styles.listContainer}>
        {enderecos.map((endereco: FormType) => (
          <Card
            key={endereco.id}
            planeta={endereco.planeta}
            destinatario={endereco.destinatario}
            contato={endereco.contato}
            logradouro={endereco.logradouro}
            bairro={endereco.bairro}
            cidade={endereco.cidade}
            uf={endereco.uf}
            fabrica={endereco.fabrica}
            lote={endereco.lote}
            cep={endereco.cep}
            pais={endereco.pais}
            estado={endereco.estado}
          />
        ))}
      </div>
      {enderecos.length === 0 && (
        <div className={styles.imgContainer}>
          <img src={undrawDrone} alt="Imagem" className={styles.img} />
        </div>
      )}
    </div>
  );
}
