import { useState, useEffect } from "react";
import { initialState } from "./initialState";

import Editor from "../editor/Editor";
import Preview from "../preview/Preview";
import bundle from "../../services";
import Wrapper from "../wrapper/Wrapper";

import classes from "./Display.module.css";

export default function Display() {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [input, setInput] = useState(initialState);

  const onInputChange = (val: string) => {
    setInput(val);
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setErr(output.err);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className={classes.display}>
      <Wrapper direction="horizontal">
        <Editor initialValue={input} onChange={onInputChange} />
      </Wrapper>
      <Preview code={code} err={err} />
    </div>
  );
}
