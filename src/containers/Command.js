import { connect } from "react-redux";
import { createSelector } from "reselect";
import { selectCommmands } from "../selectors/robot";
import { handleCommand, reset, clearErrorMessage } from "../actions/robot";
import Command from "../components/Command";

export default connect(
  createSelector(selectCommmands(), (commands) => ({
    commands
  })),
  { handleCommand, clearErrorMessage, reset }
)(Command);
