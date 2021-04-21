import React from "react";
import CommandInput from "./CommandInput";

const Command = ({ commands, handleCommand, reset, clearErrorMessage }) => (
  <>
    <CommandInput
      handleCommand={handleCommand}
      clearErrorMessage={clearErrorMessage}
      reset={reset}
    />
  </>
);

export default Command;
