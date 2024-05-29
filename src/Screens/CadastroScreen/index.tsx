import styles from "./styles.module.css";
import Form from "./Components/Form";
import InfoCadastro from "./Components/Info";
import { useState } from "react";
import FormType from "../../types";

export default function CadastroScreen() {
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
    localStorage.setItem(
      "enderecos",
      JSON.stringify({
        id: crypto.randomUUID(),
        ...form,
      })
    );
  };

  return (
    <div className={styles.container}>
      <InfoCadastro form={form} />
      <Form form={form} setForm={setForm} handleSubmit={handleSubmit} />
    </div>
  );
}
