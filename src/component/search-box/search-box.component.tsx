import { ChangeEvent } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  onChangeH: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onChangeH } : SearchBoxProps) => {
  return (
    <input
      className="search-box"
      type="search"
      onChange={onChangeH}
      placeholder="Search Monsters"
    />
  );
};

export default SearchBox;
