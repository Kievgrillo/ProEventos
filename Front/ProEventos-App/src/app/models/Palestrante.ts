import { Evento } from "./Evento";
import { RedeSocial } from "./RedeSocial";

export interface Palestrante {

  id: number ;
  nome: string ;
  minicurrículo: string ;
  imagemURL: string ;
  telefone: string ;
  email: string ;
  redeSocial: RedeSocial[];
  palestranteEvento:  Evento[];
}