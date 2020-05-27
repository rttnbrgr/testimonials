import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledToken = styled.div`
  display: flex;
  align-items: center;

  .token + .token {
    margin-left: 2rem;
  }

  & + & {
    margin-left: 2rem;
  }

  .token--row {
    display: flex;
  }

  /* token */
  .token--swatch {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: green;
    border: none;
    margin-right: 1rem;
  }

  .token--name {
    font-size: 20px;
  }

  .token--hex {
    font-size: 12px;
    font-family: monospace;
  }
`;

const Token = ({ name = "Green", hex = "#00ff00" }) => (
  <StyledToken className="token">
    <div className="token--swatch" />
    <div>
      <h2 className="token--name">{name}</h2>
      <p className="token--hex">{hex}</p>
    </div>
  </StyledToken>
);

export default Token;
