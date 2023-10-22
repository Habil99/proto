import { PropsWithChildren } from "react";
import { Sidebar } from "@/components";

export default function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex space-x-12 bg-card-background-color px-4 pt-6 pb-12 md:pr-10 rounded-md">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
