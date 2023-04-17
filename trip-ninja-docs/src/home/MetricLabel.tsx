import React from "react";

interface MetricLabelProps {
  metric: string;
  label: string;
}

export default function MetricLabel(props: MetricLabelProps) {
  return(
    <div className="col-md-3">
      <h1 className="primary-text">
        {props.metric}
      </h1>
      <p className="body-text">
        {props.label}
      </p>
    </div>
  );
}
