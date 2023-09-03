import React from "react";
import { connect, styled } from "frontity";

const GenericEvent = (
  category,
  action,
  label,
  { state, actions, ...props }
) => {
  actions.analytics.event({
    name: "genericEvent",
    payload: {
      category: category,
      action: action,
      label: label,
    },
  });
};

export default connect(GenericEvent);
