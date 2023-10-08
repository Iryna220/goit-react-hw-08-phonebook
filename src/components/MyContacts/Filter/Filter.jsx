import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter } from 'redux/filters/filtersSelectors';
import { setStatusFilter } from 'redux/filters/filtersSlice';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    dispatch(setStatusFilter(evt.currentTarget.value.trim()));
  };

  return (
    <div className={css.filterSection}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
