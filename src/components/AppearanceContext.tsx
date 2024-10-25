import { createContext } from "react";

export type Appearance = 'light' | 'dark' | 'system';
export interface AppearanceContextType {
  value: Appearance,
  setValue: (appearance: Appearance) => void
}
export const AppearanceContext = createContext<AppearanceContextType>({value: "system",
  setValue: (appearance: Appearance) => {}});