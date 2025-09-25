import { UserContext } from "../Context/ContextProvider";
import { DataContext } from "../Context/ContextProvider";
import { useEffect, useState, useContext } from "react";

import Button from "../components/Button";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import { BrainCard } from "../components/BrainCard";
import { ContentModal } from "../components/ContentModal";
import { Sidebar } from "../components/Sidebar";
import { api } from "../lib/api";
import { ShareBrain } from "../components/ShareBrain";


export const Dashboard = () => {
  const Token = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [share, setShare] = useState(false);
  const context=useContext(DataContext);
  if(!context){
    throw new Error('');
  }
  const {Data,setData}=context;
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await api.get("/content", {
          headers: {
            Authorization: `Bearer ${Token?.Token}`,
          },
        });
        if (!response?.data) {
          alert("No data present");
          return;
        }
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    const timeout = setTimeout(fetchInfo, 3000);

    return () => clearTimeout(timeout);
  }, [Data,Token]);

  return (
    <div className="position-relative">
      <div className="">
        <Sidebar />
      </div>
      <div className="ml-72 pl-5 h-screen w-auto bg-gray-200">
        <ContentModal open={open} setOpen={setOpen} />
        <ShareBrain share={share} setShare={setShare} />
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
            onClick={() => {
              setShare(true);
            }}
          />
        </div>
        <div className="flex  flex-wrap gap-4">
          {Data &&
            Data.map((data) => (
              <BrainCard title={data.title} link={data.link}
              type={data.type}
              _id={data._id} />
            ))}
        </div>
      </div>
    </div>
  );
};
