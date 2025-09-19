import { SidebarItem } from "./SidebarItem";
import { Twitter } from "../icons/Twitter";
import { YouTube } from "../icons/YouTube";
import { BrainIcon } from "../icons/BrainIcon";
export const Sidebar = () => {
  return (
    <div
      className="h-screen w-72 fill-blue-700 bg-white border border-r-black  fixed
    left-0 top-0 flex flex-col p-5 text-xl gap-10"
    >
      <div className="flex items-center gap-2">
        <BrainIcon />
        <h1 className="text-2xl font-semibold">Brainly</h1>
      </div>
      <div className="flex flex-col gap-5 ">
        <SidebarItem title="twitter"  icon={<Twitter />} />
      <SidebarItem title="YouTube" icon={<YouTube />} />
      </div>
    </div>
  );
};
