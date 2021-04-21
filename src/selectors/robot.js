import { createSelector } from "reselect";

export const selectRobotState = () => (state) => state.robot;

export const selectCoordinate = () =>
  createSelector(selectRobotState(), (robotState) => robotState.coordinate);

export const selectFacing = () =>
  createSelector(selectRobotState(), (robotState) => robotState.facing);

export const selectRotateDeg = () =>
  createSelector(selectRobotState(), (robotState) => robotState.rotateDeg);

export const selectCommmands = () =>
  createSelector(selectRobotState(), (robotState) => robotState.commands);

export const selectErrorMessage = () =>
  createSelector(selectRobotState(), (robotState) => robotState.errorMessage);

export const selectIsPlaced = () =>
  createSelector(selectRobotState(), (robotState) => robotState.isPlaced);
