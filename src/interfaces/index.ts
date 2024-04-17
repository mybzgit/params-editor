export interface Param {
  id: number;
  name: string;
  type: "string" | "number";
}
export interface ParamValue {
  paramId: number;
  value: string;
}
export interface Color {
  id: string;
}
export interface Model {
  paramValues: ParamValue[];
  colors?: Color[];
}
