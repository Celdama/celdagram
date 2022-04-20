import styled from 'styled-components';
import breakpoint from '../../Helpers/breakpoints';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: ${breakpoint.sm}) {
    flex-direction: row;
  }
`;

export const ContentUser = styled.div`
  max-width: 500px;
  margin-bottom: 2rem;

  @media screen and (min-width: ${breakpoint.sm}) {
    width: 35%;
    padding-left: 1.4rem;
  }
`;
