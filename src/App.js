import { useState } from 'react';
import './App.css';
import { GeneratedText } from './Components/GeneratedText';
import { Input } from './Components/Input';


function App() {
  const words = [
    "Lorem",
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
    "Donec",
    "odio",
    "pellentesque",
    "diam",
    "Posuere",
    "morbi",
    "leo",
    "urna",
    "molestie",
    "Gravida",
    "neque",
    "convallis",
    "a",
    "cras",
    "semper",
    "auctor",
    "Nisi",
    "vitae",
    "suscipit",
    "tellus",
    "mauris",
    "Nisl",
    "tincidunt",
    "eget",
    "nullam",
    "non",
    "est",
    "facilisis",
    "Purus",
    "enim",
    "praesent",
    "elementum",
    "blandit",
    "volutpat",
    "maecenas",
    "Porta",
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
    "Commodo",
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
    "Euismod",
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
    "Libero",
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
    "Sapien",
    "ullamcorper",
    "nibh",
    "nam",
    "Ultricies",
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
    "Feugiat",
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
    "Scelerisque",
    "imperdiet",
    "venenatis",
    "cum",
    "sociis",
    "etiam",
    "natoque",
    "penatibus",
    "magnis",
    "dis",
    "Vulputate",
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
    "Habitasse",
    "platea",
    "dictumst",
    "rhoncus",
    "hendrerit",
    "dapibus",
    "iaculis",
    "eros",
    "Ante",
    "ligula",
    "rutrum",
    "Ridiculus",
    "mus",
    "parturient",
    "montes",
    "nascetur",
    "potenti",
  ];

  let [params, setParams] = useState({
    amount: 2,
    type: "paragraphs"
  });
  const handleChange = (e) => {
    setParams({ ...params, amount: e.target.value });
  };
  const handleChangeType = (e) => {
    setParams({ ...params, type: e.target.value });
  };

  function generateLorem() {
    let genWords = '';
    switch (params.type) {
      case "words":
        
        for (let i = 0; i < params.amount; i++) {
          let randomNum = Math.floor(Math.random() * words.length);
          genWords = genWords + ' ' + words[randomNum].toLowerCase();
        }
        setResult(genWords);
        break;
      case "lines":
        for (let i = 0; i < (params.amount * 11); i++) {
          let randomNum = Math.floor(Math.random() * words.length);
          genWords = genWords + ' ' + words[randomNum];
        }
        setResult(genWords);
        break;
      case "paragraphs":
        genWords = "Lorem ipsum dolor sit amet";
        for (let i = 0; i < params.amount; i++) {
          for (let j = 0; j < (Math.floor(Math.random() * (200 - 150 + 1) + 150)); j++) {
            let randomNum = Math.floor(Math.random() * words.length);
            genWords = genWords + ' ' + words[randomNum];
          }
          genWords = genWords + ' ';
        }
        setResult(genWords);
        break;
      default:
        for (let i = 0; i < params.amount; i++) {
          let randomNum = Math.floor(Math.random() * words.length);
          genWords = genWords + ' ' + words[randomNum];
        }
        setResult(genWords);
    }
  }
 


  let [result , setResult] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='mb-5 mt-5'>Lorem Ipsum Text Generator</h1>
            <div className="form-group">
              <Input inputType={"number"} amount={params.amount} onInputChange={handleChange} />
              <Input inputType={"select"} amount={params.type} onInputChange={handleChangeType}/>
              <Input inputType={"submit"} onInputChange={generateLorem} />
              <button className='btn btn-secondary' onClick={() => {navigator.clipboard.writeText(result)}}>Copy Text</button>
            </div>
            <GeneratedText genText={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
