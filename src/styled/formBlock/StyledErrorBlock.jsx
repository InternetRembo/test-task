import styled from 'styled-components';

export const StyledErrorBlock = styled.div`
  display: flex;
  height:24px;
  align-items:center;
  font-size:14px;
  margin:0 0 5px 5px;
  position: absolute;
  background-color: white;
  padding: 2px 10px;
  color: red;
  box-shadow:2px 2px 2px 2px grey;
  border-radius: 5px;
...props.style`;
