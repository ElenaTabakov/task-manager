import React from 'react'
import { Input } from "../sharedComponents/FormElements/Input/Input.styles";
import * as S from './FormElements/Form.styled';


 const SearchForm = ({handleOnChangeSearch}:{ handleOnChangeSearch:(e: React.ChangeEvent<HTMLInputElement>) => void})  => {
  return (
    <S.Form className='search_form'>
    <Input type="search" onChange={(e) => handleOnChangeSearch(e)} error  placeholder="Search" />
  </S.Form>
  )
}
export default SearchForm;




