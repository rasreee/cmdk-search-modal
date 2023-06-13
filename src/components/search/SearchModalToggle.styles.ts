import { PlainButton } from '@components/Button';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Button = styled(PlainButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  min-width: 20vw;
  ${({ theme }) =>
    css`
      padding: 0.75rem 1.25rem;
      border-radius: ${theme.radii.md};
      border: 1px solid ${theme.colors.gray[200]};
    `}
`;

export const Kbd = styled.kbd`
  font-family: sans-serif;
  padding: 0.25rem 0.375rem;
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  ${({ theme }) =>
    css`
      border: 1px solid ${theme.colors.gray[200]};
      border-radius: ${theme.radii.base};
      font-size: ${theme.fontSizes.sm};
      font-weight: ${theme.fontWeights.medium};
      color: ${theme.colors.gray[400]};
    `}
`;
