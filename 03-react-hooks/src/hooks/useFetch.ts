import { useEffect, useState } from "react";

interface IUseFetchCustomHook {
  data: null | any[];
  isLoading: boolean;
  hasError: null | boolean;
}

export const useFetch = (url: string): IUseFetchCustomHook => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({ data, isLoading: false, hasError: null });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
