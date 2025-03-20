export interface Article {
  id:number;
  title :string;
  content  :string;
  slug :string;
  auteur : string;
  photo  :string;
  create_at:string;
  nb_comments:number;
  categories:string[];
}
