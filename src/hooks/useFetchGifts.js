import { useEffect, useState } from "react";
import { getGifts } from "../helpers/GetGifts";

export const useFecthGifts = (categoria) => {
  const [state, setstate] = useState({ data: [], loading: true });
  useEffect(() => {
    getGifts(categoria).then((imgs) => {
      setstate({ data: imgs, loading: false });
    });
  }, [categoria]);
  return state;
};
