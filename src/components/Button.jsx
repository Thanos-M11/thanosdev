import styled from "styled-components";

const Button = styled.button`
  background-color: inherit;
  border: 1px solid var(--color-base-500);
  border-radius: 0.7em;
  padding: 0.5em 1.5em;
  color: var(--color-base-250);
  font-size: 1.2rem;

  &:hover {
    border: 1px solid var(--color-base-050);
    color: var(--color-base-050);
  }
`;

export default Button;
