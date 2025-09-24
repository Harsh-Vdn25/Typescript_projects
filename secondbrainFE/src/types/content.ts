export interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "notes";
}
export interface BrainDataType{
  Data:CardProps[];
  setData:React.Dispatch<React.SetStateAction<CardProps[]>>
}
