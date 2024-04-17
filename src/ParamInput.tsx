import { memo } from "react";

const ParamInput = memo(
  ({
    type,
    paramName,
    paramValue,
    onChange,
  }: {
    type: "string" | "number";
    paramName: string;
    paramValue: string;
    onChange: (value: string) => void;
  }) => {
    return (
      <label
        style={{
          display: "inline-flex",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <span style={{ width: "100px" }}>{paramName}</span>
        <input
          type={type}
          style={{ float: "right" }}
          value={paramValue}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </label>
    );
  },
  (prev, next) => prev.paramValue == next.paramValue
);

export default ParamInput;
