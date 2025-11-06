import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchGetPopularBooks = () => {
  return api.get("/subjects/love.json", {
    params: { limit: 10 },
  });
};

export const useGetPopularBooks = () => {
  return useQuery({
    queryKey: ["popular-books"],
    queryFn: fetchGetPopularBooks,
    select: (result) => result.data,
  });
};
