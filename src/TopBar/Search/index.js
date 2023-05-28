import { useSelector } from "react-redux";
import { StyledInput } from "./styled";
import { selectSearchType } from "./searchSlice";

export const Search = () => {
  const searchType = useSelector(selectSearchType);
  const placeholder = `Search for ${searchType}...`;

  return <StyledInput placeholder={placeholder} />;
};
