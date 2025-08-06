import { Button } from "./ui/button";
import { CrossIcon } from "./ui/crossicon";
import { Input } from "./ui/input";

interface ContextModelProps {
  open: boolean;
  onClose: () => void;
}

export function ContextModel({ open, onClose }: ContextModelProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-60" onClick={onClose}></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-xl shadow-xl w-[24rem] p-6 z-10">
        {/* Close button */}
        <div className="absolute top-3 right-3 cursor-pointer" onClick={onClose}>
          <CrossIcon />
        </div>

        {/* Form content */}
        <div className="flex flex-col space-y-4 mt-6 ">
          <Input placeholder="Title" />
          <Input placeholder="Link" />
          <Input placeholder="Type" />
          <Button varient="primary" title="submit" onClick={()=>{}}/>
        </div>
      </div>
    </div>
  );
}
