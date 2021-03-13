import styled from "styled-components";

export const TextFieldContainer = styled.div`
  .ant-input {
    height: ${({ height }) => height}px;
  }
  label {
    font-weight: bold;
  }
`;
