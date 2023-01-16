import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import React from 'react'
import * as S from './FormElements/Form.styled';


 const SearchForm = ({handleOnChangeSearch}:{ handleOnChangeSearch:(e: React.ChangeEvent<HTMLInputElement>) => void})  => {
  return (
    <Input
    icon={<IconSearch />}
    placeholder="Search"
    onChange={(e: string | any) => handleOnChangeSearch(e)} 
  />
  )
}
export default SearchForm;




