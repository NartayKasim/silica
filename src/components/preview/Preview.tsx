import { useRef, useEffect } from "react";
import { html } from "./htmlBoilerplate";

import classes from "./Preview.module.css";

interface PreviewProps {
  code: string;
  err: string;
}
export default function Preview({ code, err }: PreviewProps) {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, "*");
    }, 500);
  }, [code]);

  return (
    <div className={classes.preview}>
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && <div className={classes.error}>{err}</div>}
    </div>
  );
}
