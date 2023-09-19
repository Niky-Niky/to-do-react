import { FilterLabel, FilterField } from "./Filter.styled";

export const Filter = ({ value, onChange }) => (
    <FilterLabel>
      Фільтр по іменi
      <FilterField type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );