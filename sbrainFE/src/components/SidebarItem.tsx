import type { ReactElement } from "react";

export interface sidebarType{
  text:string;
  icon:ReactElement;
}

export const SidebarItem = (props:sidebarType) => {
  return (
    <div>
      {props.icon} {props.text}
    </div>
  )
}
