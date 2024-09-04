import React, { createContext, useContext, useState } from "react";

const KeyboardContext = createContext(null) as React.Context<null | {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>;

export function KeyboardProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <KeyboardContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </KeyboardContext.Provider>
  );
}

export function useKeyboard() {
  const value = useContext(KeyboardContext);
  if (!value)
    throw new Error("useKeyboard have to be used withing KeyboardProvider");
  return value;
}
