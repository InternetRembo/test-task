import styled from "styled-components";

export const StyledBadge = styled.span`
  background-color: ${({ bgColor }) => bgColor || "#f83d6b"};
  display: flex;
  align-items: center;
  font-family: Arial;
  font-size: 10px;
  text-align: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  width: ${({ width }) => width || "15px;"};
  height: ${({ height }) => height || "15px;"};
  position: absolute;
  top: ${({ top }) => top || "-5px"};
  right: ${({ right }) => right || "-10px"};
`;
