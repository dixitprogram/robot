import React, { memo, useState, useCallback } from "react";

const CommandInput = memo(({ handleCommand, reset, clearErrorMessage }) => {
  const [command, updateCommand] = useState("");

  const onChange = useCallback((e) => {
    e.preventDefault();

    updateCommand(e.target.value.toUpperCase());
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (command.length === 0) return;

      clearErrorMessage();

      handleCommand(command);

      updateCommand("");
    },
    [command, clearErrorMessage, handleCommand]
  );

  return (
    <>
      <input
        value={command}
        onChange={onChange}
        placeholder="Tell the robot what to do ..."
      />
      <button type="submit" onClick={handleSubmit}>
        Run
      </button>
      <button onClick={reset}>Reset</button>
      <button>Report</button>
      <button>Detect</button>
      <button>Drop</button>
    </>
  );
});

CommandInput.displayName = "CommandInput";

export default CommandInput;
