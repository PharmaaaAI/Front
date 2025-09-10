import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../rtk/slices/categories-slice";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
}

export default Categories