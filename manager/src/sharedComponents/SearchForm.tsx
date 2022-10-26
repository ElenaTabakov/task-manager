import React from 'react'
import { Input } from "../sharedComponents/FormElements/Input/Input.styles";
import * as S from './FormElements/Form.styled';


 const SearchForm = ({handleOnChangeSearch}:{ handleOnChangeSearch:(e: React.ChangeEvent<HTMLInputElement>) => void})  => {
  return (
    <S.Form className='search_form'>
    <input type="search" onChange={(e) => handleOnChangeSearch(e)}  placeholder="Search" />
  </S.Form>
  )
}
export default SearchForm;




