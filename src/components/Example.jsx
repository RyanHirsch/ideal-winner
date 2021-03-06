import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions } from "../redux/data/actions";
import Debug from "./Debug";
import { getArbitrary, getByType } from "../redux/data/selectors";

export function UnconnectedExample({ getPeople, setData, updateData, example, swapiValues }) {
  return (
    <div>
      Example
      <button onClick={() => setData("arbitrary:test", { test: "value" })} type="button">
        SET test
      </button>
      <button
        onClick={() => updateData("arbitrary:test", { val: Math.floor(Math.random() * 10) })}
        type="button"
      >
        UPDATE test.val
      </button>
      <button onClick={() => setData("arbitrary:test", undefined)} type="button">
        CLEAR test.val
      </button>
      <Debug data={example} />
      <button onClick={() => getPeople()} type="button">
        GET
      </button>
      SWAPI count {swapiValues.length}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    example: getArbitrary(state, "test"),
    swapiValues: getByType(state, "swapi"),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedExample);
