import React from "react";
import { StyledButton } from "./styles";
import { IButton } from "./types";

export default function Button({ title, onClick }: IButton) {
  return (
    <StyledButton onClick={onClick}>
      {title}
    </StyledButton>
  );
}