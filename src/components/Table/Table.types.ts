export interface TableProps {
  disabled?: boolean;
  headers: string[];
  data: (string | number)[][];
  footer?: string[];
}
