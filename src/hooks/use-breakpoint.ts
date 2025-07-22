import { useMediaQuery } from "react-responsive";
const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  secondMd: "770px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
type BreakpointKey = keyof typeof breakpoints;
export function useBreakpoint<K extends BreakpointKey>(
  breakpointKey: K,
  widthType?: "max" | "min" | undefined
): boolean {
  const isBreakpointActive = useMediaQuery({
    query: `(${widthType ?? "max"}-width: ${breakpoints[breakpointKey]})`,
  });
  return isBreakpointActive;
}