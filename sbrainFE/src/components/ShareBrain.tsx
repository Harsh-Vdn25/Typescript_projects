import Button from "./Button";
import { CopyIcon } from "../icons/CopyIcon";
import { CrossIcon } from "../icons/CrossIcon";
import { api } from "../lib/api";
import { useContext } from "react";
import { UserContext } from "../Context/ContextProvider";
interface PropsType {
  share: boolean;
  setShare: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShareBrain = (props: PropsType) => {
  const Token = useContext(UserContext);
  const shareLink = async () => {
    try {
      const response = await api.post("/brain/share",{
        share:true
      }, {
        headers: {
          Authorization: `Bearer ${Token?.Token}`,
        },
      });
      if (!response?.data) {
        alert("Failed to create the link");
        return;
      }
      console.log(response?.data);
      const link = response?.data?.hash;
      const copied=await navigator.clipboard.writeText(link);
      alert('Copied the text');
    } catch (err) {}
    setTimeout(() => {
      props.setShare(false);
    }, 2 * 1000);
  };
  return (
    <>
      {props.share && (
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-gray-500 opacity-75">
          <div className="flex flex-col gap-7 bg-white border rounded-xl p-7 border-black outline-2">
            <div className="flex items-center">
              <h2 className="text-purple-600 text-xl font-bold">
                Share your Second Brain
              </h2>
              <CrossIcon onClick={() => props.setShare(false)} size="lg" />
            </div>
            <Button
              size="md"
              type="button"
              text="Share Brain"
              startIcon={<CopyIcon />}
              variant="primary"
              onClick={() => shareLink()}
            />
          </div>
        </div>
      )}
    </>
  );
};
