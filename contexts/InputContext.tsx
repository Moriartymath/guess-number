import React, { createContext, useContext, useState } from "react";

const InputContext = createContext(null) as React.Context<null | {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}>;

export function InputProvider({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
}

export function useInput() {
  const value = useContext(InputContext);
  if (!value)
    throw new Error("useKeyboard have to be used withing KeyboardProvider");
  return value;
}
