import { useLocation, useHistory } from "react-router-dom";

export const useSetQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const setQueryParameter = ({ nameValue, value, nameValue2, value2 }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value2 === undefined) {
      searchParams.delete(nameValue2);
      searchParams.set(nameValue, value);
    } else {
      searchParams.delete(nameValue);
      searchParams.delete(nameValue2);
      searchParams.set(nameValue2, value2);
      searchParams.set(nameValue, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return setQueryParameter;
};

export const useGetQueryParameter = (nameParameter) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const parameter = searchParams.get(nameParameter);

  return parameter;
};
