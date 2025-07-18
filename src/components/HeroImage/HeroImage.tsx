import React from "react";

export interface HerolmageProps {
  title: string;
  subtitle?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Herolmage: React.FC<HerolmageProps> = ({
  title,
  subtitle,
  disabled = false,
  children,
}) => (
  <section
    style={{
      background: "#f0f0f0",
      padding: "32px",
      borderRadius: "12px",
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
    }}
  >
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    {children}
  </section>
);

export default Herolmage;
