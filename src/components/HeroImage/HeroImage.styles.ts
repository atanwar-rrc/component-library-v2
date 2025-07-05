import styled from "styled-components";

export const StyledHero = styled.div<{ disabled?: boolean; height?: string }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || "1000px"};
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    filter: ${({ disabled }) => (disabled ? "grayscale(90%)" : "none")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: opacity 0.2s, filter 0.2s;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1));
  text-shadow: 0 2px 12px rgba(0,0,0,0.7);
  pointer-events: none;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  margin: 0 0 0.5rem 0;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  margin: 0;
`;
