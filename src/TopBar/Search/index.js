import { useSelector, useDispatch } from "react-redux";
import { StyledInput } from "./styled";
import { disengage, engage, selectSearchType, setQuery } from "./searchSlice";
import { useSetQueryParameter } from "../../common/setQueryParameters";
import { useState } from "react";
import { useEffect } from "react";

export const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const searchType = useSelector(selectSearchType);
  const placeholder = `Search for ${searchType}...`;
  const setQueryParameters = useSetQueryParameter();

  useEffect(() => {
    dispatch(setQuery(input));
    input === "" ? dispatch(disengage()) : dispatch(engage());
  }, [input]);

  const onInputChange = ({ target }) => {
    setInput(target.value.trim());
    setQueryParameters({
      nameValue: "page",
      value: 1,
      nameValue2: "search",
      value2: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return <StyledInput placeholder={placeholder} onChange={onInputChange} />;
};
