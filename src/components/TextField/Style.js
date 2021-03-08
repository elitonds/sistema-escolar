import styled from "styled-components";
import { Colors } from "../Colors";

export const TextFieldContainer = styled.div`
  .error-message {
    color: ${Colors.Red};
  }
  .ant-input {
    height: ${({ height }) => height}px;
  }
  label {
    font-weight: bold;
  }
`;
