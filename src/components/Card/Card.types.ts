export interface CardProps {
  title: string;
  subtitle?: string;          // Allow optional subtitle
  disabled?: boolean;
  children?: React.ReactNode;
}
