import { FileVideo } from "lucide-react";

export default function DropOption({ name, icon }) {
  return (
    <div className="flex gap-x-8 items-center pl-7 text-sm py-3 border-t border-gray-100 text-gray-600 cursor-pointer hover:bg-gray-100">
      <span className="size-4 ">{icon}</span>
      {name}
    </div>
  );
}
