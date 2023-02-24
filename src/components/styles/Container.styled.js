import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 80vw;
  margin: auto;
  margin-top: 50px;
`;

export const StyledHeader = styled.header`
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5vh 0;
  text-align: center;
  max-height: auto;

  @media screen and (max-height: 900px) {
    h1 {
      padding-top: 0;
      transform: scale(0.8);
    }
  }

  h1 {
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-top: 10vh;
  }

  p {
    color: #eee;

    span {
      color: #e3ff00;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  form {
    text-align: center;
    padding: 3px;
    display: inline-flex;
    background-color: white;
    border-radius: 5px;
    margin: 2vh auto;
  }

  form input {
    padding: 5px 12px;
    border: none;
    outline: none;
    border-radius: 5px 0 0 5px;
    font-size: 1em;
  }

  form button {
    border-radius: 0 3px 3px 0;
    border: 0;
    outline: none;
    margin-left: 2px;
    padding: 3px 6px;
    color: white;
    cursor: pointer;
    background-color: grey;
  }
`;

export const StyledResult = styled.div`
  padding: 30px 5vw;
  margin: auto;
  max-width: 800px;

  h3 {
    width: 100%;
    border-bottom: 1px solid #eee;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    padding: 10px;
  }
`;

export const StyledError = styled.div`
  padding: 30px 5vw;
  margin: auto;
  max-width: 800px;
  text-align: center;

  h3 {
    letter-spacing: 2px;
    color: red;
    font-weight: 500;
    text-transform: uppercase;
  }

  p {
    padding: 10px;
  }
`;

export const StyledBtn = styled.button`
  padding: 5px 12px;
  cursor: pointer;
  color: white;
  border: 2px solid white;
  background: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: 0.2s;

  :hover {
    background-color: white;
    color: grey;
  }
`;

export const StyledHistoryBtn = styled.button`
  position: absolute;
  top: 2vh;
  right: 5vw;
  border: none;
  background: white;
  padding: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;

  img {
    height: 100%;
  }

  ::before {
    content: "History";
    position: absolute;
    right: 55px;
    height: 50px;
    display: flex;
    background-color: white;
    top: 0;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    border-radius: 50px;
    visibility: hidden;
    transition: 0.2s;
  }

  &:hover::before {
    visibility: visible;
  }
`;

export const StyledHistoryDialogue = styled.div`
  position: absolute;
  min-height: 400px;
  max-height: 600px;
  width: 300px;
  top: 20vh;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 15px;
  color: grey;
  display: none;
  overflow: hidden;

  ::before {
    content: "";
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(to top, white, 70%, transparent);
  }

  .closeBtn {
    padding: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    background-color: #ff7300;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      height: 100%;
      filter: invert(1);
      pointer-events: none;
    }
  }

  .historyHead {
    margin-top: 10px;

    h3 {
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }

  .historyList {
    padding: 20px;

    ul li {
      list-style: none;
      text-transform: uppercase;
      margin-bottom: 5px;
    }
  }
`;
