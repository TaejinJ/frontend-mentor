import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
export const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    // 이동하는 함수 만들어야함 ex) naigate써서
  }

  // filter 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <Search>
      <Input placeholder='나라를 입력하시오.'
        value={searchValue}
        onChange={handleChange}
        type='text'
      />
      <div className="dropdown-menu" >
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedOption ? selectedOption : 'Filter'}
        </button>
        {isOpen && (
          <ul className="dropdown-options">
            <li onClick={() => handleOptionSelect('Option 1')}>Africa</li>
            <li onClick={() => handleOptionSelect('Option 2')}>America</li>
            <li onClick={() => handleOptionSelect('Option 3')}>Asia</li>
            <li onClick={() => handleOptionSelect('Option 4')}>Europe</li>
            <li onClick={() => handleOptionSelect('Option 5')}>Oceania</li>
          </ul>
        )}
      </div>
    </Search>
  )
}
const Search = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 4;
  `;

const Input = styled.input`
width: 300px;
border: none;
background: aliceblue;
border-radius: 10px;
height: 40px;


`