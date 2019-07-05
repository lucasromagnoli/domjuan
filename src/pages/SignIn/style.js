import styled from 'styled-components';

export const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  img {
    align-self: center;
    height: 72px;
    width: 72px;
    margin-bottom: 25px;
  }

  p {
    color: #fff;
    font-weight: bold;
    margin-bottom: 3px;
  }
  input {
    border: 0;
    border-radius: 10px;
    height: 50px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  button {
    margin-top: 5px;
    border: 0;
    border-radius: 10px;
    height: 50px;
    background: #e5293e;
    font-size: 16px;
    color: #fff;

    &:hover {
      background: #e1193e;
    }
  }
`;
