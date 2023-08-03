export interface FieldProps {
  label: string;
  buttonName: string;
  initValue?: string;
  clearAfterSubmit?: boolean;
  onSubmit: (value: string) => void;
}
