import { useLocation, useHistory } from "react-router-dom";

export const useSetQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const setQueryParameter = (values) => {
    const searchParams = new URLSearchParams(location.search);

    for (const { nameValue, value } of values) {
      searchParams.set(nameValue, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return setQueryParameter;
};

