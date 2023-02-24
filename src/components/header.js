import {
  StyledHeader,
  StyledBtn,
  StyledHistoryBtn,
} from "./styles/Container.styled";

import historyIcon from "./images/hostory.png";

function Header({
  inputWord,
  handleSubmit,
  handleChange,
  inputValue,
  randomise,
  showHistory,
}) {
  return (
    <div>
      <StyledHeader>
        <h1>Simple Dictionary App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search a word..."
            onChange={handleChange}
            value={inputValue}
          />
          <button>Search</button>
        </form>
        {inputWord && (
          <p>
            Results for: <span>{inputWord}</span>
          </p>
        )}

        <StyledBtn onClick={randomise}>Random Word</StyledBtn>
      </StyledHeader>

      <StyledHistoryBtn onClick={showHistory}>
        <img src={historyIcon} alt="History Icon" />
      </StyledHistoryBtn>
    </div>
  );
}

export default Header;
