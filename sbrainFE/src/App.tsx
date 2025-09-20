import Button from "./components/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";
import { BrainCard } from "./components/BrainCard";
import { ContentModal } from "./components/ContentModal";
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
const App = () => {
  const [open, setOpen] = useState(false);
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
        <BrainCard
          title="Important post"
          link="https://twitter.com/sachinyadav699/status/1968273831350677715"
          type="twitter"
        />
        <BrainCard
          title="song"
          link="https://www.youtube.com/watch?v=60ItHLz5WEA&list=RD60ItHLz5WEA&start_radio=1"
          type="youtube"
        />
      </div>
    </div>
    </div>
  );
};

export default App;
