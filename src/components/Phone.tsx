import { ChangeEvent, memo, useState } from "react";

const PhoneNumber = memo(() =>{
  const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");

    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 5) return phoneNumber;

    if (phoneNumberLength < 8) {
      return `+${phoneNumber[0]}( ${phoneNumber.slice(
        1,
        4
      )}) ${phoneNumber.slice(4)}`;
    }
    
    return `+${phoneNumber[0]} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4,7)}-${phoneNumber.slice(7, 9)}${phoneNumber.slice(9, 11)}`;
  };

  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formatedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formatedPhoneNumber);
  };
  return <input onChange={(e) => handleInput(e)} value={inputValue} />;
})
export default PhoneNumber;
