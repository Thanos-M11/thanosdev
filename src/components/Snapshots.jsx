import styled from "styled-components";
import Subtitle from "./Subtitle";
import { useEffect, useRef, useState } from "react";
import { TbRuler2 } from "react-icons/tb";
import SnapshotItem from "./SnapshotItem";

const SnapshotContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
  width: 390px;
  margin: 0 auto;
`;

function Snapshots({ images }) {
  return (
    <>
      <Subtitle>App / Code Snapshots: </Subtitle>

      <SnapshotContainer>
        {images.map((image) => (
          <SnapshotItem key={image.imgFile} image={image} />
        ))}
      </SnapshotContainer>
    </>
  );
}

export default Snapshots;
