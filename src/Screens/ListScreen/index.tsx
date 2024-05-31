import Card from "../../Components/Card";
import styles from "./styles.module.css";
import undrawDrone from "../../assets/undrawDrone.png";
import FormType from "../../types";
import { useState } from "react";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import { planetas } from "../../utils/constants";
import Swal from "sweetalert2";
import EditModal from "../../Components/Modal";

/**
 * @description Tela de listagem de endereços cadastrados
 * @param {FormType[]} enderecos - Lista de endereços cadastrados
 * @param {React.Dispatch<React.SetStateAction<FormType[]>>} setEnderecos - Função para alterar a lista de endereços
 */
export default function ListScreen({
  enderecos,
  setEnderecos,
}: {
  enderecos: FormType[];
  setEnderecos: React.Dispatch<React.SetStateAction<FormType[]>>;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [planetaQuery, setPlanetaQuery] = useState("Todos");
  const [openModal, setOpenModal] = useState(false);
  const [formEdit, setFormEdit] = useState<FormType>({
    id: 0,
    destinatario: "",
    contato: "",
    planeta: "",
    logradouro: "",
    bairro: "",
    cep: "",
    cidade: "",
    uf: "",
    pais: "",
    fabrica: "",
    lote: "",
    estado: "",
  });

  /**
   * @description Edita um endereço da lista
   * @param {FormType} form - Formulário com os dados do endereço a ser editado
   */
  const editEndereco = (form: FormType) => {
    const endereco = enderecos.find((endereco) => endereco.id === form.id);
    if (endereco) {
      setEnderecos(
        enderecos.map((e) => {
          if (e.id === endereco.id) {
            return form;
          }
          return e;
        })
      );
      localStorage.setItem(
        "enderecos",
        JSON.stringify(
          enderecos.map((e) => {
            if (e.id === endereco.id) {
              return form;
            }
            return e;
          })
        )
      );
    }
  };

  /**
   * @description Deleta um endereço da lista
   * @param {number} id - id do endereço a ser deletado
   */
  const deleteEndereco = (id: number) => {
    Swal.fire({
      icon: "info",
      title: "Deseja excluir o endereço?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const newEnderecos = enderecos.filter((endereco) => endereco.id !== id);
        setEnderecos(newEnderecos);
        localStorage.setItem("enderecos", JSON.stringify(newEnderecos));
      }
    });
  };

  /**
   * @description Filtra os endereços de acordo com o planeta e a pesquisa
   */
  const enderecosFiltrados = enderecos.filter((endereco) => {
    if (planetaQuery === "Todos") {
      return endereco.destinatario
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    } else {
      const matchesName = endereco.destinatario
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesPlaneta = endereco.planeta === planetaQuery;
      return matchesName && matchesPlaneta;
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>Endereços cadastrados</h1>
        <div className={styles.inputs}>
          <Input
            label="Pesquisar destinatário"
            type="text"
            obrigatorio={false}
            valor={searchQuery}
            isAlterado={setSearchQuery}
          />
          <Select
            label="Planeta"
            itens={["Todos", ...planetas.map((p) => p.value)]}
            obrigatorio={false}
            valor={planetaQuery}
            isAlterado={setPlanetaQuery}
          />
        </div>
      </div>
      <div className={styles.listContainer}>
        {enderecosFiltrados.map((endereco: FormType) => (
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
            form={endereco}
            openModal={openModal}
            setOpenModal={setOpenModal}
            deleteEndereco={() => deleteEndereco(endereco.id)}
            setFormEdit={setFormEdit}
          />
        ))}
        {openModal && (
          <EditModal
            formEdit={formEdit}
            setFormEdit={setFormEdit}
            isModalOpen={openModal}
            setIsModalOpen={setOpenModal}
            editEndereco={editEndereco}
          />
        )}
      </div>
      {enderecosFiltrados.length === 0 && (
        <div className={styles.imgContainer}>
          <img src={undrawDrone} alt="Imagem" className={styles.img} />
        </div>
      )}
    </div>
  );
}
