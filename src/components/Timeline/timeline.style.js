import styled from 'styled-components';
import breakpoints from '../../Helpers/breakpoints';

export const Wrapper = styled.section`
  width: 100%;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 80%;
  }
`;

export const Content = styled.div``;
