import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState
} from "react";
import { Model, Param } from "./interfaces";
import ParamInput from "./ParamInput";

interface Props {
  params: Param[];
  model: Model;
}

const ParamEditor = forwardRef(({ params, model }: Props, ref) => {
  const [currentModel, setCurrentModel] = useState<Model>(model);

  useImperativeHandle(
    ref,
    () => {
      return {
        getModel() {
          return currentModel;
        },
      };
    },
    [currentModel]
  );

  const handleChangeModel = useCallback((value: string, id: Param["id"]) => {
    setCurrentModel((prev) => {
      const index = prev.paramValues.findIndex((pv) => pv.paramId == id);
      const editedParam = { ...prev.paramValues[index] };
      const rest = prev.paramValues.filter((pv) => pv.paramId != id);
      if (editedParam) {
        editedParam.value = value;
        return {
          paramValues: [editedParam, ...rest],
          ...prev.colors
        };
      }
      return prev;
    });
  }, []);

  return (
    <div>
      {params.map((p: Param) => {
        const paramValue = currentModel.paramValues.find(
          (pv) => pv.paramId == p.id
        );
        if (paramValue)
          return (
            <div key={p.id}>
              <ParamInput
                type={p.type}
                paramName={p.name}
                paramValue={paramValue.value}
                onChange={(v) => handleChangeModel(v, p.id)}
              />
            </div>
          );
      })}
    </div>
  );
});

export default ParamEditor;
