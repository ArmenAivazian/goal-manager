import { useState } from "react";
import ReactQuill from "react-quill";
import classes from "./TextEditor.module.scss";
import { TextEditorProps } from "./TextEditor.types";

export function TextEditor({ initialValue, onChange }: TextEditorProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className={classes.wrapper}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={(value) => {
          setValue(value);
          onChange(value);
        }}
      />
    </div>
  );
}
