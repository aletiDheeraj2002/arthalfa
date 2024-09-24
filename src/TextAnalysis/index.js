import React, { useState, useEffect } from 'react';

const TextAnalysis = () => {
  const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleReplace = () => {
    const newText = text.replaceAll(searchString, replaceString);
    setText(newText);
  };

  useEffect(() => {
    const words = text.match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words.map(word => word.toLowerCase()));
    setUniqueWordCount(uniqueWords.size);

    const charsWithoutSpaces = text.replace(/[\s.,?!;:()]/g, '').length;
    setCharCount(charsWithoutSpaces);
  }, [text]);

  return (
    <div>
      <h1>Real-Time Text Analysis and String Replacement</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type or paste your text here"
        rows="10"
        cols="80"
      />
      <p>Unique Words: {uniqueWordCount}</p>
      <p>Character Count (Excluding Spaces and Punctuation): {charCount}</p>
      
      <div>
        <input
          type="text"
          placeholder="Search string"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <input
          type="text"
          placeholder="Replace string"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
};

export default TextAnalysis;