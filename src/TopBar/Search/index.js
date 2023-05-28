import { useSelector } from "react-redux";
import { StyledInput } from "./styled";
import { selectSearchType } from "./searchSlice";
import { useSetQueryParameter } from "../../common/setQueryParameters";

export const Search = () => {
  const searchType = useSelector(selectSearchType);
  const placeholder = `Search for ${searchType}...`;
  const setQueryParameters = useSetQueryParameter();

  const onInputChange = ({ target }) => {
    setQueryParameters({
      nameValue: "page",
      value: 1,
      nameValue2: "search",
      value2: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return <StyledInput placeholder={placeholder} onChange={onInputChange} />;
};
