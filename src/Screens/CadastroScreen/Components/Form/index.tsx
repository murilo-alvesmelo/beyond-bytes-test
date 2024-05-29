import axios from "axios";
import ButtonPrimary from "../../../../Components/ButtonPrimary";
import Input from "../../../../Components/Input";
import Select from "../../../../Components/Select";
import styles from "./styles.module.css";
import estados from "./estados";
import FormType from "../../../../types";

type FormProps = {
  form: FormType;
  setForm: (form: FormType) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function Form({ form, setForm, handleSubmit }: FormProps) {
  const getCep = async (cep: string) => {
    try {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          const { logradouro, bairro, localidade, uf, cep } = response.data;
          setForm({
            ...form,
            cep,
            logradouro,
            bairro,
            cidade: localidade,
            estado: uf,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <Input
            label="Destinatário"
            type="text"
            obrigatorio
            valor={form.destinatario}
            isAlterado={(valor) => setForm({ ...form, destinatario: valor })}
          />
          <Input
            label="Contato"
            type="text"
            obrigatorio
            valor={form.contato}
            isAlterado={(valor) => setForm({ ...form, contato: valor })}
          />
          <Select
            label="Tipo"
            itens={["Terra", "Marte"]}
            obrigatorio
            valor={form.tipo}
            isAlterado={(valor) => setForm({ ...form, tipo: valor })}
          />
        </div>
        // se o tipo for Marte, exibir o campo de quantida
        {form.tipo === "Terra" ? (
          <>
            <div className={styles.row}>
              <Input
                label="CEP"
                type="text"
                obrigatorio
                valor={form.cep}
                isAlterado={(valor) => {
                  getCep(valor);
                  setForm({ ...form, cep: valor });
                }}
              />
              <Input
                label="Logradouro"
                type="text"
                obrigatorio
                valor={form.logradouro}
                isAlterado={(valor) => setForm({ ...form, logradouro: valor })}
              />
              <Input
                label="Bairro"
                type="text"
                obrigatorio
                valor={form.bairro}
                isAlterado={(valor) => setForm({ ...form, bairro: valor })}
              />
            </div>
            <div className={styles.row}>
              <Input
                label="Cidade"
                type="text"
                obrigatorio
                valor={form.cidade}
                isAlterado={(valor) => setForm({ ...form, cidade: valor })}
              />
              <Select
                label="Estado"
                itens={estados.map((e) => e.value)}
                obrigatorio
                valor={form.estado}
                isAlterado={(valor) => setForm({ ...form, estado: valor })}
              />
              <Input
                label="País"
                type="text"
                obrigatorio
                valor={form.pais}
                isAlterado={(valor) => setForm({ ...form, pais: valor })}
              />
            </div>
          </>
        ) : (
          <div className={styles.row}>
            <Input
              label="Fabrica"
              type="text"
              obrigatorio
              valor={form.fabrica}
              isAlterado={(valor) => setForm({ ...form, fabrica: valor })}
            />
            <Input
              label="Lote"
              type="text"
              obrigatorio
              valor={form.lote}
              isAlterado={(valor) => setForm({ ...form, lote: valor })}
            />
          </div>
        )}
        <ButtonPrimary title="Cadastrar" type="submit" />
      </form>
    </div>
  );
}
