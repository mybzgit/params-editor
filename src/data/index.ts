import { Model, Param } from "../interfaces";

export const params: Param[] = [
  { id: 1, name: "Назначение", type: 'string' },
  { id: 2, name: "Длина", type: 'number' },
  { id: 3, name: 'Сезон', type: 'string' }
];

export const model: Model = {
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "5" },
    { paramId: 3, value: "лето" },
  ],
};
