export interface FieldProps {
  label: string;
  buttonName: string;
  type?: "text" | "range";
  initValue?: string;
  clearAfterSubmit?: boolean;
  onSubmit: (value: string) => void;
}
