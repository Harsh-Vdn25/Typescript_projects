import { CrossIcon } from "../icons/crossIcon";
interface OpenType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContentModal = ({ open, setOpen }: OpenType) => {
  return (
    <>
      {open && (
        <div className="w-screen h-screen flex  bg-black fixed top-0 left-0  opacity-75 justify-center items-center">
          <div className="flex flex-col  lg:w-1/4 md:w-1/3 p-5 gap-2  bg-white rounded-md  text-black ">
            <div className="flex justify-end">
              <CrossIcon size="md"  onClick={()=>setOpen(false)}/>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col justify-center gap-2"
            >
              <div className="flex flex-col gap-2">
                <label>Note</label>
                <input
                  type="text"
                  className="h-12 font-medium border border-gray-700 rounded-md "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Link</label>
                <input
                  type="text"
                  className="h-12 font-medium border border-gray-700 rounded-md "
                />
              </div>
            </form>
            <button
              type="submit"
              className="bg-violet-600 p-3 text-white text-lg w-full rounded-lg hover:bg-violet-900"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};