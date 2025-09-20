import Button from "../components/Button";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import { BrainCard } from "../components/BrainCard";
import { ContentModal } from "../components/ContentModal";
import { useEffect, useState,useContext } from "react";
import { Sidebar } from "../components/Sidebar";
import { api } from "../lib/api";
import { UserContext } from "../Context/ContextProvider";
import type { CardProps } from "../components/BrainCard";


export const Dashboard = () => {
    const Token=useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [Data, setData] = useState<CardProps[]>([]);
    useEffect(()=>{
      const fetchInfo=async()=>{
        try{
        const response=await api.get('/content',{
           headers:{
            "Authorization":`Bearer ${Token?.Token}`
          }
        })
        if(!response?.data||response.data.length===0){
          alert('No data present');
          return;
        }
        setData(response.data);
        console.log(typeof Data);
        console.log(response?.data);
      }catch(err){
        console.log(err);
      }
      }
      fetchInfo();
    },[Token])

  return (
    <div className="position-relative">
      <div className="">
        <Sidebar/>
      </div>
    <div className="ml-72  h-screen bg-gray-200">
      <ContentModal open={open} setOpen={setOpen} />
      <div className="flex justify-end gap-4 mb-5">
        <Button
          startIcon={<PlusIcon size="md" />}
          size="md"
          variant="primary"
          text="Add Content"
          onClick={() => {
            setOpen(true);
          }}
        />
        <Button
          startIcon={<ShareIcon size="md" />}
          size="lg"
          variant="secondary"
          text="Share"
          onClick={() => {}}
        />
      </div>
      <div className="flex  gap-4">
        {
          Data&&
          Data.map((data: CardProps,value: any)=>(
            <BrainCard
            title={data.title}
            link={data.link}
            type={data.type}

            />
          ))
        }
      </div>
    </div>
    </div>
  )
}
