import styles from "./styles.module.css";
import Form from "./Components/Form";
import InfoCadastro from "./Components/Info";
import { useState } from "react";
import FormType from "../../types";
import Swal from "sweetalert2";

type CadastroScreenProps = {
  enderecos: FormType[];
  setEnderecos: React.Dispatch<React.SetStateAction<FormType[]>>;
};

export default function CadastroScreen({
  enderecos,
  setEnderecos,
}: CadastroScreenProps) {
  const [form, setForm] = useState<FormType>({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEndereco = { id: enderecos.length + 1, ...form };
    setEnderecos([...enderecos, newEndereco]);
    showSuccessAlert();
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Endereço cadastrado!",
      text: "Verifique a lista de endereços cadastrados",
      icon: "success",
    })
      .then(() => {
        setForm({
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
      <Form form={form} setForm={setForm} handleSubmit={handleSubmit} />
    </div>
  );
}
