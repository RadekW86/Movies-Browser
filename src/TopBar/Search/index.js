import { useSelector, useDispatch } from "react-redux";
import { StyledInput } from "./styled";
import {
  disengage,
  engage,
  selectSearchType,
  setQuery,
} from "./searchSlice";
import {
  useGetQueryParameter,
  useSetQueryParameter,
} from "../../common/setQueryParameters";
import { useState } from "react";
import { useEffect } from "react";

export const Search = () => {
  const queryURLparameter = useGetQueryParameter("search");
  const queryURL = queryURLparameter === null ? "" : queryURLparameter;
  const [input, setInput] = useState(queryURL || "");
  const dispatch = useDispatch();
  const searchType = useSelector(selectSearchType);
  const placeholder = `Search for ${searchType}...`;
  const setQueryParameters = useSetQueryParameter();

  useEffect(() => {
    input === "" ? dispatch(disengage()) : dispatch(engage());
    dispatch(setQuery(input));
  }, [input]);

  useEffect(() => {
    setInput(queryURL);
  }, [queryURLparameter]);

  const onInputChange = ({ target }) => {
    setInput(target.value);
    setQueryParameters({
      nameValue: "page",
      value: 1,
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
