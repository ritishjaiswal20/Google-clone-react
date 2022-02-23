import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [state, dispatch] = useStateValue("");
  const [input, setInput] = useState("");
  const history = useHistory();
  const Search = (e) => {
    e.preventDefault();
    console.log("your input ", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputicon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_button">
          <Button type="submit" onClick={Search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I am feeling lucky</Button>
        </div>
      ) : (
        <div className="search_button">
          <Button
            className="search_buttonHidden"
            type="submit"
            onClick={Search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonHidden" variant="outlined">
            I am feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
