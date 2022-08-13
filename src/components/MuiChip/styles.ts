import { Chip, Paper } from '@mui/material';
import styled from 'styled-components';

const getColor = (chipType: string) => {
  switch (chipType) {
    case 'success':
      return {
        background: '#c7ffa6',
        color: '#217a00',
      };
    case 'info':
      return {
        background: '#00bcd4',
        color: 'white',
      };

    default:
      break;
  }
};

export const StyledChip = styled(Chip)`
  background-color: ${(props: {chipType: string}) => getColor(props.chipType).background};
  color: ${(props: {chipType: string}) => getColor(props.chipType).color};
  font-weight: 600;
  font-size: 0.875rem;
`;
