import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Result from "./components/result";
import { StyledHistoryDialogue } from "./components/styles/Container.styled";
import closeIcon from "./components/images/close.png";
import dictionary from "./data/dictionary.json";

function App() {
  const [inputWord, setInputWord] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    setInputValue((prev) => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputWord((prev) => inputValue);

    setInputValue((prev) => "");
  };

  useEffect(() => {
    setWord((prev) => dictionary[inputWord]);
  }, [inputWord]);

  // Function to create a random word
  const randomise = () => {
    const wordKeysArray = Object.keys(dictionary);
    let newRandomWord = wordKeysArray[Math.floor(Math.random() * 102218)];
    setInputWord((prev) => newRandomWord);
  };

  // History Dialogue box getting by ID
  const historyDialogueBox = document.getElementById("historyDialogueBox");

  // Function to show History dialogue box
  const showHistory = () => {
    historyDialogueBox.style.display = "block";
  };

  // function to close history dialogue box
  const closeHistoryDialogue = () => {
    historyDialogueBox.style.display = "none";
  };

  // Function to create history array
  // initialize empty history array
  const [searchHistory, setSearchHistory] = useState([]);
  useEffect(() => {
    setSearchHistory((prev) => [...searchHistory, inputWord]);
  }, [inputWord]);

  return (
    <div>
      <Header
        inputWord={inputWord}
        setInputWord={setInputWord}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
        randomise={randomise}
        showHistory={showHistory}
      />

      <Result inputWord={inputWord} randomise={randomise} word={word} />

      {/* History dialogue box code */}
      <StyledHistoryDialogue id="historyDialogueBox">
        <div className="closeBtn" onClick={closeHistoryDialogue}>
          <img src={closeIcon} alt="close Icon" />
        </div>

        <div className="historyHead">
          <h3>
            Words you've <br /> searched for
          </h3>
        </div>

        <div className="historyList">
          <ul>
            {searchHistory &&
              searchHistory.map((history) => {
                return <li key={Math.random()}>{history}</li>;
              })}
          </ul>

          {!searchHistory && <p>No search history yet!</p>}
        </div>
      </StyledHistoryDialogue>
    </div>
  );
}

export default App;
