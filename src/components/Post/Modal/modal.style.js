import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 4rem 2rem 2rem;

  .modal-content {
    padding: 3rem 2rem;
    border-radius: 4px;
    width: 70%;
    max-width: 35rem;
    background-color: var(--white);
    text-align: center;

    div {
      display: flex;
      justify-content: center;
      gap: 6px;
    }
  }
`;
