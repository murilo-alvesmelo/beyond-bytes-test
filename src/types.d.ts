export default interface FormType {
  id: number;
  destinatario: string;
  contato: string;
  planeta: string;
  logradouro: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  pais: string;
  fabrica: string;
  lote: string;
  estado: string;
}

export interface InfoTerraProps {
  destinatario: string;
  contato: string;
  planeta: string;
  cep: string;
  logradouro: string;
  bairro: string;
  uf: string;
  cidade: string;
  pais: string;
}

export interface InfoMarteProps {
  destinatario: string;
  contato: string;
  planeta: string;
  lote: string;
  fabrica: string;
}

export interface ButtonProps {
  title: string;
  isFunction?: () => void;
  type?: "button" | "submit" | "reset";
}
