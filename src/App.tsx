import { useRef } from "react";
import ParamEditor from "./ParamEditor";
import { model, params } from "./data";
import { Model } from "./interfaces";

function App() {
  const editorRef = useRef<{ getModel: () => Model }>(null);

  return (
    <>
      <ParamEditor params={params} model={model} ref={editorRef} />
      <button onClick={() => console.log(editorRef?.current?.getModel())}>
        getModel
      </button>
    </>
  );
}

export default App;
