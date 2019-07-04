import styled from 'styled-components';

export const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: purple;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 300px;
  background: blue;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: green;

  img {
    align-self: center;
    height: 72px;
    width: 72px;
    margin-bottom: 10px;
  }

  input {
    border: 0;
    border-radius: 10px;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 5px;
  }

  button {
    border: 0;
    border-radius: 10px;
    height: 40px;
    background: #e5293e;
    font-size: 16px;
    color: #fff;

    &:hover {
      background: #e1193e;
    }
  }
`;
