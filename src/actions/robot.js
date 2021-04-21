import { action } from "typesafe-actions";
import { getErrorMessage } from "../utils/index";
export const ActionTypes = {
  ADD_COMMAND: "ADD_COMMAND",
  RESET: "RESET",
  INPUT_ERROR: "INPUT_ERROR",
  PLACE_ERROR: "PLACE_ERROR",
  CLEAR_ERROR_MESSAGE: "CLEAR_ERROR_MESSAGE"
};
export const CommandTypes = {
  PLACE: "PLACE",
  MOVE: "MOVE",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  REPORT: "REPORT"
};
export const addCommand = (command) =>
  action(ActionTypes.ADD_COMMAND, { command });

export const reset = () => action(ActionTypes.RESET);

export const showInputError = (message) =>
  action(ActionTypes.INPUT_ERROR, { message });

export const showPlaceError = (message) =>
  action(ActionTypes.PLACE_ERROR, { message });

export const clearErrorMessage = () => action(ActionTypes.CLEAR_ERROR_MESSAGE);

export const handleCommand = (command) => (dispatch, getState) => {
  const {
    robot: { facing, coordinate, isPlaced }
  } = getState();

  const { inputError, placeError } = getErrorMessage({
    inputedCommand: command,
    isPlaced,
    facing,
    coordinate
  });

  if (inputError.length) {
    dispatch(showInputError(inputError));

    return;
  }

  if (placeError.length) {
    dispatch(showPlaceError(placeError));

    return;
  }

  dispatch(addCommand(command));
};
