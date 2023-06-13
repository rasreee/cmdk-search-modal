import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledProps } from "@styles/types";
import { smallerThan } from "@utils/breakpoints";
import { pseudo } from "@utils/pseudo";

const sharedStyles = ({ theme }: StyledProps) => css`
  padding: 0.75rem;
  border-radius: ${theme.radii.base};
  background: none;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes.lg};
  ${smallerThan("tablet")} {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const PlainButton = styled.button`
  background: none;
  border: none;
  ${sharedStyles};
  ${({ theme }) =>
    css`
      ${pseudo("_hover")} {
        background: ${theme.colors.gray[100]};
      }
      ${pseudo("_active")} {
        background: ${theme.colors.gray[200]};
      }
    `}
`;

export const PrimaryButton = styled.button`
  border: none;
  ${sharedStyles};
  ${({ theme }) =>
    css`
      background: ${theme.colors.blue[600]};
      color: white;
      ${pseudo("_hover")} {
        background: ${theme.colors.blue[700]};
      }
      ${pseudo("_active")} {
        background: ${theme.colors.blue[800]};
      }
    `}
`;
