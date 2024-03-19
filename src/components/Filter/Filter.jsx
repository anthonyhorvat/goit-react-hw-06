import { FilterInput, FilterInputTitle } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/filtersSlice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <FilterInputTitle>Find contacts by name</FilterInputTitle>
      <FilterInput
        type="text"
        onChange={(e) => dispatch(updateFilter(e.target.value))}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default Filter;
