//import the Data,setData context  
import { UserContext,DataContext } from "../Context/ContextProvider";
import { useContext } from "react";
import { api } from "../lib/api";

import ShareIcon from "../icons/ShareIcon";
import { Twitter } from "../icons/Twitter";
import { YouTube } from "../icons/YouTube";
import { ContentType } from "./ContentModal";
import { DeleteIcon } from "../icons/DeleteIcon";
import {type CardProps } from "../types/content";


export const BrainCard = ({ title, link, type,_id }:CardProps) => {
  const context=useContext(DataContext);
  const usercontext=useContext(UserContext);
  if(!usercontext){
    throw new Error('');
  }
  if(!context){
    throw new Error('');
  }
  const {Token}=usercontext;
  const {Data,setData}=context;

  const deleteBrain=async (e:React.MouseEvent<SVGElement>)=>{
    try{
      const response=await api.delete(`/content/${_id}`,{
        headers:{
          Authorization:`Bearer ${Token}`
        }
      })
      if(!response?.data){
        console.log("Failed to delete");
        return;
      }
      console.log(Data);
      const newData=Data.filter(d=>d._id!==_id);
      setData(newData);
    }catch(err){
      console.error(err);
    }
  }
  return (
    <div
      className="p-8 bg-white rounded-md shadow-md border-gray-200
    max-w-72 md:w-30 border flex flex-col flex-wrap gap-4"
    >
      <div className="flex  justify-between text-md">
        <div className="flex items-center gap-2">
          {type === ContentType.YouTube ? <YouTube /> : <Twitter />}
          {title}
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <ShareIcon size="md" 
           />
          <DeleteIcon size="md" 
          onClick={(e)=>deleteBrain(e)}/>
        </div>
      </div>
      <div>
        {type === "youtube" && (
          <iframe
            className="w-full h-auto"
            width="560"
            height="315"
            src={link.includes("watch") ? link.replace("watch?v=", "embed/") : link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a
              href={link.replace("x.com", "twitter.com").replace("?v=", "/")}
            ></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
