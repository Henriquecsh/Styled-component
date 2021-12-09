import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  .text{
      font-weight: bold;
  }
`;

export default ({ type, from, value }) => {
  return (
    <Item>
      <spam className="text">{type}</spam>
      <spam>{from}</spam>
      <spam>{value}</spam>
    </Item>
  );
};
