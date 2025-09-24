import type { ReactElement } from "react";

export interface sidebarType{
  title:string;
  icon:ReactElement;
}

export const SidebarItem = (props:sidebarType) => {
  return (
    <div className="flex gap-3 cursor-pointer">
      {props.icon} {props.title}
    </div>
  )
}
