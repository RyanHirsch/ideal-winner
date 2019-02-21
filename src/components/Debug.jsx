import React from "react";
import { connect } from "react-redux";
import { path } from "ramda";

function Debug({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export function mapStateToProps(state, { src, data }) {
  return {
    data: data || path(src.split("."), state),
  };
}

export default connect(mapStateToProps)(Debug);
