import { css } from '@emotion/react';
import styled from '@emotion/styled';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

import { ClearButton } from '@/components';

export const FileInput = styled(ClearButton)<Pick<ImageState, 'blobUrl'>>`
  position: relative;
  margin: 20px 20px 0;
  padding-bottom: 56.25%;
  width: calc(100% - 40px);
  border: 1px dashed #a4a4a4;

  ${({ blobUrl }) =>
    blobUrl
      ? css`
          border-style: solid;
          background-color: #efefef;
          background-image: url(${blobUrl});
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;

          svg {
            display: none;
          }
        `
      : null}
`;

export const InputIcon = styled(AddPhotoAlternateOutlinedIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: #a4a4a4;
`;
