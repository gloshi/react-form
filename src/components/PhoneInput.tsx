import React, { useState,memo } from 'react';

import styles from '../styles/HomeInput.module.scss'

const PhoneInput = memo(() =>{
  const [inputValue, setInputValue] = useState<string>('')

  const formatPhoneNumber = (input: string) => {
    
    const cleaned = ('' + input).replace(/\D/g, '');
    
    const numArr = cleaned.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    let result = '';
    
    if (numArr) {
      result = '+'
      numArr[1] && (result += numArr[1] + ' ');
      numArr[2] && (result += '(' + numArr[2] + ') ');
      numArr[3] && (result += numArr[3] + '-');
      numArr[4] && (result += numArr[4] + '-');
      numArr[5] && (result += numArr[5]);
      console.log(result)
    }

    return result;
  };

  const handleChange = (event: { target: { value: string; }; }) => {
    setInputValue(formatPhoneNumber(event.target.value));
  };

  return (
    <input
    className={styles.input}
      type="tel"
      placeholder="+7 (900) 000-00-00"
      value={inputValue}
      onChange={handleChange}
    />
  );
})

export default PhoneInput;