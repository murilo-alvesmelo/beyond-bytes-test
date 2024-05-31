import ReactModal from "react-modal";
import Form from "../../Screens/CadastroScreen/Components/Form";
import FormType from "../../types";

type EditModalProps = {
  isModalOpen: boolean;
  formEdit: FormType | null;
  setFormEdit: (form: FormType) => void;
  setIsModalOpen: (value: boolean) => void;
  editEndereco: (form: FormType) => void;
};

export default function EditModal({
  formEdit,
  isModalOpen,
  setIsModalOpen,
  editEndereco,
  setFormEdit,
}: EditModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editEndereco(formEdit);
    setIsModalOpen(false);
  };
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
    >
      <Form form={formEdit} setForm={setFormEdit} handleSubmit={handleSubmit} />
    </ReactModal>
  );
}
