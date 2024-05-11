import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  max-width: 640px;
  border-radius: 1em;
`;

const ImageComment = styled.span`
  margin: 0.5em 0;
  font-size: 1.2rem;
  color: var(--color-base-050);
  line-height: calc(1.2rem * 1.5);
`;

function SnapshotItem({ image }) {
  return (
    <StyledLi>
      <Image
        key={image.imgFile}
        src={`../images/${image.imgFile}`}
        alt={image.imgAlt}
      />
      {image?.imgComments && <ImageComment>{image.imgComments}</ImageComment>}
    </StyledLi>
  );
}

export default SnapshotItem;
