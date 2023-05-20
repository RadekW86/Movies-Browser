import { useLocation, useHistory } from "react-router-dom";

export const useSetQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const setQueryParameter = (nameValue, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(nameValue, value);
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return setQueryParameter;
};

