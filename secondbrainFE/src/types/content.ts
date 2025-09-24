export interface CardProps {
  _id?: string;
  title: string;
  link: string;
  type: "twitter" | "youtube" | "notes";
}
export interface BrainDataType{
  Data:CardProps[];
  setData:React.Dispatch<React.SetStateAction<CardProps[]>>
}
