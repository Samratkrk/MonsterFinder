import React from "react";
import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./card-list/card-list.component";
import SearchBox from "./search-box/search-box.component";

import { getData } from "../utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const Main = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonster, setFilterMonster] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonsters(users);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonster(newFilteredMonster);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="Main">
          <SearchBox onChangeH={onSearchChange} />
          {filteredMonster.map((user) => {
            return (
              <div key={user.id}>
          
              </div>
            );
          })}
          <CardList monsters={filteredMonster} />
      </div>
  );
  }

export default Main;
