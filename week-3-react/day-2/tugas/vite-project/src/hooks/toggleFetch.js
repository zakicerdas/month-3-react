import useToggle from "./useToggle";
import { useFetch } from "./fetch";

export default function useFetchWithToggle(url, initialVisible = false) {
  const [isVisible, toggle] = useToggle(initialVisible);

  const fetchUrl = isVisible ? url : null;
  const { data, loading, error } = useFetch(fetchUrl);

  return {
    isVisible,
    toggle,
    data,
    loading,
    error,
  };
}