import styled, { css } from "styled-components";

export type ButtonSize = "small" | "medium" | "large";

const small = css`
  padding: 5px 10px;
  background: #459af5;
  font-size: 1rem;
`;
const medium = css`
  padding: 5px 10px;
  background: #21c6c6;
  font-size: 1.5rem;
`;
const large = css`
  padding: 5px 10px;
  background: #87195c;
  font-size: 2rem;
`;
export type ButtonMargin = "right" | "left";

const right = css`
  margin-right: 20px;
`;
const left = css`
  margin-left: 20px;
`;

export const Button = styled.button<{ size: ButtonSize, margin: ButtonMargin }>`
  ${({ size }) => {
    if (size === "large") {
      return large;
    }
    if (size === "medium") {
      return medium;
    }
    if (size === "small") {
      return small;
    }
    return small;
  }}
  ${({ margin }) => {
    if (margin === "left") {
      return left;
    }
    if (margin === "right") {
      return right;
    }
  }}
  border:none;
  cursor: pointer;
  border-radius: 10px;
  color: #fff;
  transition: ease-in-out 0.3s;
  &:hover {
    background: #75bc67;
    color: #000;
  }
  &:disabled {
    cursor: auto;
    background: #ccc;
  }
`;

export const Cube = styled.div<{
  size: { height: number; width: number };
  bgColor: string;
}>`
  background: ${({ bgColor }) => `${bgColor}`};
  height: ${({ size }) => `${size.height}px`};
  width: ${({ size }) => `${size.width}px`};
`;
