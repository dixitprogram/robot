import {
  TABLE_DIMENSION,
  FACING_DIRECTIONS,
  ERRORS,
  COMMANDS,
  ORIENTATION
} from "../configs/constants";

export const getCommandValues = (command) => command.split(/[\s,]+/);

export const getFacingDirection = ({ x, y }) => {
  const keys = Object.keys(ORIENTATION);

  return keys.find((k) => {
    const value = ORIENTATION[k];

    return value.x === x && value.y === y;
  });
};
export const isRobotOnTable = ({ x, y }) =>
  x > -1 && x < TABLE_DIMENSION.x && y > -1 && y < TABLE_DIMENSION.y;

export const isValidCoordinate = (x) =>
  Number.isInteger(x) && Math.sign(x) >= 0;

export const getErrorMessage = ({
  inputedCommand,
  isPlaced,
  facing,
  coordinate
}) => {
  const commandValues = getCommandValues(inputedCommand);

  const command = commandValues[0];
  const errors = {
    placeError: "",
    inputError: ""
  };

  if (command) {
    // Error for invalid command
    if (!COMMANDS.includes(command)) {
      errors.inputError = ERRORS.invalidCommand;

      return errors;
    } else if (command === "PLACE") {
      // Error for invalid initial command
      if (commandValues.length < 2) {
        errors.inputError = ERRORS.invalidInitialCommand;

        return errors;
      } else {
        const x = parseInt(commandValues[1], 10);

        const y = parseInt(commandValues[2], 10);

        //   const f = commandValues[3];

        if (!isValidCoordinate(x) || !isValidCoordinate(y)) {
          errors.inputError = ERRORS.wrongCoordinate;

          return errors;
        }

        if (!isRobotOnTable({ x, y })) {
          errors.inputError = ERRORS.wrongPlace;

          return errors;
        }
      }
    } else {
      // Error for robot not being replaced
      if (!isPlaced) {
        errors.inputError = ERRORS.notInitialized;

        return errors;
      }

      // Error for falling off table
      if (command === "MOVE" && coordinate !== null) {
        const nextX = coordinate.x + facing.x;

        const nextY = coordinate.y + facing.y;

        if (!isRobotOnTable({ x: nextX, y: nextY })) {
          errors.placeError = ERRORS.wrongMovingDirection;

          return errors;
        }
      }
    }
  }

  return errors;
};
