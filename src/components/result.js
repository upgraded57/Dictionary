import { StyledResult, StyledError } from "./styles/Container.styled";

function Result({ inputWord, word, randomise }) {
  return (
    <>
      {word && (
        <StyledResult>
          <h3>Meaning</h3>
          <p>{word}</p>
        </StyledResult>
      )}

      {!inputWord.length === 0 && !word && (
        <StyledError>
          <h3>oops! word not found</h3>
          <p>Try searching a new word or check your spellings</p>
        </StyledError>
      )}

      {inputWord.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Try searching a word
        </p>
      )}
    </>
  );
}

export default Result;
