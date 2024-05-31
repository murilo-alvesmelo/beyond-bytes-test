import ReactModal from "react-modal";
import Form from "../Form";
import FormType from "../../types";
import Swal from "sweetalert2";

type EditModalProps = {
  isModalOpen: boolean;
  formEdit: FormType;
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
    if (
      formEdit.planeta === "Marte" &&
      formEdit.lote.replace(/[^0-9a-z]/gi, "").length !== 4
    ) {
      Swal.fire({
        title: "Atenção!",
        text: "O lote de Marte deve ter 4 caracteres",
        icon: "warning",
      });
      return;
    }
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
