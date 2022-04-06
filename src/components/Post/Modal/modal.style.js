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
  padding: 40px 20px 20px;

  .modal-content {
    width: 30%;
    height: 30%;
    background-color: #fff;
  }
`;
