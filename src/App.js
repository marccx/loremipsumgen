import { useState } from "react";
import "./App.css";
import { GeneratedText } from "./Components/GeneratedText";
import { Input } from "./Components/Input";
import { CopyBtn } from "./Components/CopyBtn";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function App() {
  let [params, setParams] = useState({
    inputValue: 5,
    type: "paragraphs",
  });
  let [copyText, setCopyText] = useState("Copy to Clipboard");

  function changeCopyText() {
    setCopyText("Copied");

    setTimeout(() => {
      setCopyText("Copy to Clipboard");
    }, 1200);
  }

  const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "donec",
    "odio",
    "pellentesque",
    "diam",
    "Posuere",
    "morbi",
    "leo",
    "urna",
    "molestie",
    "gravida",
    "neque",
    "convallis",
    "a",
    "cras",
    "semper",
    "auctor",
    "nisi",
    "vitae",
    "suscipit",
    "tellus",
    "mauris",
    "nisl",
    "tincidunt",
    "eget",
    "nullam",
    "non",
    "est",
    "facilisis",
    "purus",
    "enim",
    "praesent",
    "elementum",
    "blandit",
    "volutpat",
    "maecenas",
    "porta",
    "mollis",
    "aliquam",
    "porttitor",
    "arcu",
    "risus",
    "quis",
    "varius",
    "quam",
    "quisque",
    "id",
    "commodo",
    "aenean",
    "nunc",
    "massa",
    "nec",
    "dui",
    "mattis",
    "turpis",
    "tempus",
    "egestas",
    "cursus",
    "in",
    "hac",
    "euismod",
    "pulvinar",
    "habitant",
    "tristique",
    "senectus",
    "netus",
    "sollicitudin",
    "ac",
    "orci",
    "phasellus",
    "velit",
    "dignissim",
    "sodales",
    "libero",
    "consequat",
    "interdum",
    "ornare",
    "vivamus",
    "felis",
    "bibendum",
    "sem",
    "viverra",
    "aliquet",
    "nulla",
    "vel",
    "augue",
    "eu",
    "fermentum",
    "faucibus",
    "integer",
    "sapien",
    "ullamcorper",
    "nibh",
    "nam",
    "ultricies",
    "tortor",
    "at",
    "eleifend",
    "proin",
    "pretium",
    "lectus",
    "malesuada",
    "curabitur",
    "lacus",
    "laoreet",
    "ultrices",
    "feugiat",
    "sagittis",
    "fringilla",
    "duis",
    "dictum",
    "fusce",
    "placerat",
    "mi",
    "vestibulum",
    "condimentum",
    "lacinia",
    "scelerisque",
    "imperdiet",
    "venenatis",
    "cum",
    "sociis",
    "etiam",
    "natoque",
    "penatibus",
    "magnis",
    "dis",
    "vulputate",
    "luctus",
    "accumsan",
    "pharetra",
    "erat",
    "justo",
    "suspendisse",
    "fames",
    "facilisi",
    "vehicula",
    "congue",
    "lobortis",
    "metus",
    "habitasse",
    "platea",
    "dictumst",
    "rhoncus",
    "hendrerit",
    "dapibus",
    "iaculis",
    "eros",
    "ante",
    "ligula",
    "rutrum",
    "ridiculus",
    "mus",
    "parturient",
    "montes",
    "nascetur",
    "potenti",
  ];
  const handleChange = (e) => {
    setParams({ ...params, inputValue: e.target.value });
  };
  const handleChangeType = (e) => {
    setParams({ ...params, type: e.target.value });
  };

  function pushToResult(element) {
    setResult((a) => [...a, element]);
  }

  function generateLorem() {
    setResult([]);
    let genWords = "";
    switch (params.type) {
      // WORDS CASE
      case "words":
        for (let i = 0; i < params.inputValue; i++) {
          // let randomNum = Math.floor(Math.random() * words.length);
          let randomNum = randomIntFromInterval(0, words.length - 1);
          genWords = genWords + " " + words[randomNum].toLowerCase();
        }
        pushToResult(genWords);
        break;
      // SENTENCES CASE
      case "sentences":
        for (let i = 0; i < params.inputValue; i++) {
          let seqWords = randomIntFromInterval(15, 20);
          for (let j = 0; j < seqWords; j++) {
            let randomNum = randomIntFromInterval(0, words.length - 1);
            genWords = genWords + " " + words[randomNum];
          }
          genWords = genWords + ".";
        }
        pushToResult(genWords);
        break;
      //  PARAGRAPHS CASE
      case "paragraphs":
        for (let x = 0; x < params.inputValue; x++) {
          let parag = "";
          // 5 Sentences
          for (let i = 0; i < 5; i++) {
            // 1 Sentence
            let seqWords = randomIntFromInterval(15, 20);
            for (let j = 0; j < seqWords; j++) {
              let randomNum = randomIntFromInterval(0, words.length - 1);
              parag = parag + " " + words[randomNum];
            }
            parag = parag + ".";
          }
          pushToResult(parag);
        }
        break;
      //  DEFAULT CASE
      default:
        for (let i = 0; i < params.inputValue; i++) {
          let randomNum = randomIntFromInterval(0, words.length - 1);
          genWords = genWords + " " + words[randomNum];
        }
        pushToResult(genWords);
    }
  }

  let [result, setResult] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ]);

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="website-title">Lorem Ipsum Text Generator</h1>
            <div className="form-group">
              <Input
                inputType={"number"}
                amount={params.inputValue}
                onInputChange={handleChange}
              />
              <Input
                inputType={"select"}
                amount={params.type}
                onInputChange={handleChangeType}
              />
              <Input inputType={"submit"} onInputChange={generateLorem} />
              <CopyBtn onInputChange={changeCopyText} textValue={copyText} />
            </div>
            <GeneratedText genText={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
