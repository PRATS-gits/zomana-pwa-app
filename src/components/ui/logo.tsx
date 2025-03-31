
import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "simple";
}

export function Logo({ variant = "default", className, ...props }: LogoProps) {
  const isMobile = useIsMobile();
  const displayVariant = variant === "simple" || isMobile ? "simple" : "default";

  return (
    <Link to="/" className="flex items-center gap-0.5">
      <div 
        className={cn(
          "relative font-medium tracking-tight select-none", 
          className
        )}
        {...props}
      >
        {displayVariant === "default" ? (
          <div className="flex items-center">
            <span className="text-xl font-bold">z</span>
            <span className="text-xl font-bold">o</span>
            <span className="text-xl font-bold">m</span>
            <span className="text-xl font-bold">a</span>
            <span className="text-xl font-bold">n</span>
            <span className="text-xl font-bold">a</span>
            <div className="absolute -bottom-1 left-0 w-full">
              <ArrowRight 
                className="h-4 w-full text-[#FEF7CD] stroke-[3px]" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">z</span>
            <ArrowRight 
              className="h-3 w-5 -mt-1 text-[#FEF7CD] stroke-[3px]" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
