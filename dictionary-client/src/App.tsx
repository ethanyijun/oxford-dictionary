import { useState } from "react";
import { SenseResponse, WordLookUpResponse } from "@backend/types";
import axios from "axios";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Container from "@mui/material/Container";
import SearchDisplay from "./Components/SearchDisplay";
import LinearProgress from "@mui/material/LinearProgress";

function App() {
  const [senseResonse, setSenseResponse] = useState<SenseResponse[]>();
  const [value, setValue] = useState("");
  const [word, setWord] = useState("");
  const [audio, setAudio] = useState("");
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lexicalCategory, setLexicalCategory] = useState("");

  const getWord = () => {
    setHasError(false);
    setLoading(true);
    setSenseResponse([]);
    axios
      .get<WordLookUpResponse>(`/lookup?language=en-gb&word=${value}`)
      .then((response) => {
        setSenseResponse(response.data.entries);
        setLexicalCategory(response.data.lexicalCategory);
        setWord(response.data.word);
        setAudio(response.data.audio);
        setLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="lg">
      <TextField
        placeholder="Search"
        type="text"
        variant="outlined"
        fullWidth
        size="small"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: value && (
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setValue("");
                setSenseResponse([]);
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
        onKeyPress={(ev) => {
          if (ev.key === "Enter") {
            getWord();
            ev.preventDefault();
          }
        }}
      />
      {senseResonse && senseResonse.length > 0 ? (
        <>
          <SearchDisplay
            word={word}
            senses={senseResonse}
            lexicalCategory={lexicalCategory}
            audioLink={audio}
          />
        </>
      ) : loading ? (
        <LinearProgress />
      ) : hasError ? (
        <div>Sorry something wrong happened :(</div>
      ) : null}
    </Container>
  );
}

export default App;
