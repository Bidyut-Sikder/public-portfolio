// import { cn } from "@/lib/utils";

import { cn } from "../Helpers/utils";

export default function Spinner({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        className
      )}
      role="status"
      {...props}
    >
     <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span> 
    </div>
  );
}
