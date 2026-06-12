import logo from "../../assets/logos/Logo.png";
import { cn } from "../../lib/utils";

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
};

export default function Logo({ size = "md", className, ...props }) {
  return (
    <img
      src={logo}
      alt="Yasir Ali Classes — YAC Aligarh"
      width={56}
      height={56}
      className={cn("shrink-0 object-contain", sizes[size], className)}
      {...props}
    />
  );
}
