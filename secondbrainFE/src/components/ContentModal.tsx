import { useContext, useState, type ChangeEvent } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import Button from "./Button";
import { api } from "../lib/api";
import { UserContext } from "../Context/ContextProvider";
interface OpenType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export enum ContentType {
  YouTube = "youtube",
  Twitter = "twitter",
}

export const ContentModal = ({ open, setOpen }: OpenType) => {
  const [Link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const Token=useContext(UserContext)
  const [type, setType] = useState(ContentType.YouTube);
  async function addContent(): Promise<void> {
    if(!title||!Link){
      alert('please fill the required');
      return;
    }

    try {
      const response = await api.post("/content", {
        title: title,
        type: type,
        link: Link,
      },{
        headers:{
           "Authorization": `Bearer ${Token?.Token}`
        }
      });
      console.log(response.data);
      if(!response?.data){
        console.log('Try Again');
      }
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {open && (
        <div className="w-screen h-screen flex  bg-black fixed top-0 left-0  opacity-75 justify-center items-center">
          <div className="flex flex-col  lg:w-1/4 md:w-1/3 p-5 gap-2  bg-white rounded-md  text-black ">
            <div className="flex justify-end">
              <CrossIcon size="md" onClick={() => setOpen(false)} />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex flex-col gap-2 ">
                <label>Note</label>
                <Input
                  type="text"
                  value={title}
                  placeholder="Add a title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Link</label>
                <Input
                  type="text"
                  value={Link}
                  placeholder="Add a link"
                  onChange={(e) => setLink(e.target.value)}
                />


                <div className="flex justify-center gap-3">
                  <Button
                    type="submit"
                    text="YouTube"
                    variant={type === "youtube" ? "primary" : "secondary"}
                    size="md"
                    onClick={() => setType(ContentType.YouTube)}
                  />
                  <Button
                    type="button"
                    text="Twitter"
                    variant={type === "twitter" ? "primary" : "secondary"}
                    size="md"
                    onClick={() => setType(ContentType.Twitter)}
                  />
                </div>
              </div>
            </form>
            <Button
              type="submit"
              text="Submit"
              variant="primary"
              size="md"
              onClick={() => {addContent()}}
            />
          </div>
        </div>
      )}
    </>
  );
};

export const inputStyle = "h-12 font-medium border border-gray-700 rounded-md ";
export interface InputType {
  type: "text" | "password" | "email" | "number" | "url";
  placeholder: string;
  value: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputType) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className={`${inputStyle} w-64 px-3 py-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
        placeholder-gray-400 text-gray-700`}
    />
  );
}
