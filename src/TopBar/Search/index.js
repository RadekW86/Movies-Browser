import { useSelector, useDispatch } from "react-redux";
import { StyledInput } from "./styled";
import {
  disengage,
  engage,
  selectResultsPage,
  selectSearchType,
  selectQuery,
  setQuery,
} from "./searchSlice";
import { useSetQueryParameter } from "../../common/setQueryParameters";
import { useState } from "react";
import { useEffect } from "react";

export const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const userQuery = useSelector(selectQuery);
  const searchType = useSelector(selectSearchType);
  const placeholder = `Search for ${searchType}...`;
  const setQueryParameters = useSetQueryParameter();
  const page = useSelector(selectResultsPage);

  useEffect(() => {
    dispatch(setQuery(input));
    input === "" ? dispatch(disengage()) : dispatch(engage());
  }, [input]);

  useEffect(() => {
    if (userQuery === "") {
      setInput("");
    } else {
    }
  }, [userQuery]);

  const onInputChange = ({ target }) => {
    setInput(target.value);
    setQueryParameters({
      nameValue: "page",
      value: page,
      nameValue2: "search",
      value2: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <StyledInput
      value={input}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  );
};
