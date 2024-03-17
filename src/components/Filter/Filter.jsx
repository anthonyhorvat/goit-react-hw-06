import { FilterInput, FilterInputTitle } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/contactsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const changeFilter = (event) => {
    dispatch(updateFilter(event.currentTarget.value));
  };
  return (
    <div>
      <FilterInputTitle>Find contacts by name</FilterInputTitle>
      <FilterInput
        type="text"
        onChange={changeFilter}
        placeholder="Search contacts"
        value={filter}
      />
    </div>
  );
};

export default Filter;
