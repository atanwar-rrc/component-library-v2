import React from "react";

export interface ImgProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  disabled?: boolean;
}

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled = false }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    style={{
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      objectFit: "cover",
    }}
  />
);

export default Img;
