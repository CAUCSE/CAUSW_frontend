import { css } from '@emotion/react';
import styled from '@emotion/styled';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { TextareaAutosize } from '@mui/material';

import { ClearButton } from '@/v2/components';

export const Guide = styled.div`
  margin-top: 20px;
  font-size: 12px;
  line-height: 18px;
  color: #518cff;
`;

export const Label = styled.div`
  margin-top: 30px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;

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

export const Textarea = styled(TextareaAutosize)`
  margin: 20px 20px 0;
  padding: 0;
  width: calc(100% - 40px);
  border: none;
  font-size: 14px;
  outline: none;
`;
