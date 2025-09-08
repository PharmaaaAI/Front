import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchItems } from "../rtk/slices/items-slice";

const InitialCart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems())
  }, [])
}

export default InitialCart