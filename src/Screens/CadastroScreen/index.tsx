import styles from "./styles.module.css";
import Form from "../../Components/Form";
import InfoCadastro from "./Components/Info";
import { useState } from "react";
import FormType from "../../types";
import Swal from "sweetalert2";

type CadastroScreenProps = {
  enderecos: FormType[];
  setEnderecos: React.Dispatch<React.SetStateAction<FormType[]>>;
};

/**
 * @description Tela de cadastro de endereços
 * @param {FormType[]} enderecos - Lista de endereços cadastrados
 * @param {React.Dispatch<React.SetStateAction<FormType[]>>} setEnderecos - Função para alterar a lista de endereços
 */
export default function CadastroScreen({
  enderecos,
  setEnderecos,
}: CadastroScreenProps) {
  const [form, setForm] = useState<FormType>({
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
   * @description Adiciona um endereço à lista de endereços
   * @param {React.FormEvent} e - Evento de formulário
   */
  const addEndereco = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      form.planeta === "Marte" &&
      form.lote.replace(/[^0-9a-z]/gi, "").length !== 4
    ) {
      Swal.fire({
        title: "Atenção!",
        text: "O lote de Marte deve ter 4 caracteres",
        icon: "warning",
      });
      return;
    }

    const newEndereco = {
      ...form,
      id: crypto.getRandomValues(new Uint32Array(1))[0],
    };
    setEnderecos([...enderecos, newEndereco]);
    localStorage.setItem(
      "enderecos",
      JSON.stringify([...enderecos, newEndereco])
    );
    showSuccessAlert();
  };

  /**
   * @description Exibe um alerta de sucesso ao cadastrar um endereço
   */
  const showSuccessAlert = () => {
    Swal.fire({
      title: "Endereço cadastrado!",
      text: "Verifique a lista de endereços cadastrados",
      icon: "success",
    })
      .then(() => {
        setForm({
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
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className={styles.container}>
      <InfoCadastro form={form} />
      <Form form={form} setForm={setForm} handleSubmit={addEndereco} />
    </div>
  );
}
