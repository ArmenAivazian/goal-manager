import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import classes from "./TextEditor.module.scss";
import { TextEditorProps } from "./TextEditor.types";

export function TextEditor({ initialValue, onBlur }: TextEditorProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={classes.wrapper}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        onBlur={() => onBlur(value || "")}
      />
    </div>
  );
}
