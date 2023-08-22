"use client"

import React, { useState, useRef } from 'react';

const OTPInputBox = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to store each digit of OTP
  const inputRefs = useRef([]); // Refs to store references to input fields

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus the next input field
    if (value !== '' && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputKeyDown = (event, index) => {
    if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
      // If Backspace is pressed and current input is empty, move focus to previous input
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="space-x-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            className="bg-transparent w-14 h-14 text-center text-3xl text-white border border-[#99A4E1] rounded-lg focus:outline-none focus:ring-0 focus:border-[#E14594]"
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleInputKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInputBox;
