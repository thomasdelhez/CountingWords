import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function App() {
  const [value, setValue] = useState<string>("");
  const [wordSearch, setWordSearch] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    CalculateMostFrequentNWords(value);
    CalculateFrequencyForWord(value, wordSearch);
  };

  const handleWordSearch = (event: any) => {
    setWordSearch(event.target.value);
    CalculateMostFrequentNWords(value);
    CalculateFrequencyForWord(value, wordSearch);
  };

  let CalculateMostFrequentNWords = (sentence: string) => {
    const words = sentence.replace(/[.]/g, "").split(/\s/);
    const frequencyObject: any = {};
    words.forEach(function (word) {
      if (!frequencyObject[word]) {
        frequencyObject[word] = 0;
      }
      frequencyObject[word] += 1;
    });

    console.log(frequencyObject);

    return frequencyObject;
  };

  let CalculateFrequencyForWord = (sentence: string, searchWord: string) => {
    const words = sentence.replace(/[.]/g, "").split(/\s/);
    let tempCounter = 0;
    words.forEach(function (word) {
      if (word === searchWord) {
        tempCounter += 1;
        setCounter(tempCounter);
      }
    });
  };

  return (
    <>
      <TextField
        id="standard-multiline-flexible"
        label="Word counter input:"
        multiline
        value={value}
        onChange={handleChange}
      />
      <p>Inserted string:</p>
      <p>{value}</p>

      <TextField
        id="standard-multiline-flexible2"
        label="Word search frequency:"
        value={wordSearch}
        onChange={handleWordSearch}
      />
      <p>{counter}</p>
    </>
  );
}

export default App;
