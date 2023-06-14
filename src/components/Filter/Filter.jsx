import { changeFilter } from '../../store/filterSlice';

import { useDispatch, useSelector } from 'react-redux';

import {FilterInput} from './filter.styled'
export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <label>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          onChange={evt => dispatch(changeFilter(evt.target.value))}
          value={filter}
        />
      </label>
    </>
  );
}