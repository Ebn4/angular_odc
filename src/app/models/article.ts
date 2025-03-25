import { Categorie } from "./categorie";

export interface Article {
  id:number;
  title :string;
  slug :string;
  photo  :string;
  auteur : string;
  content  :string;
  user_id:number;
  create_at:string;
  update_at:string;
  nb_comments:number;
  categories:Categorie[];
}


