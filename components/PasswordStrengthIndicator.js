"use client"

import React, { useState } from 'react';

const PasswordStrengthIndicator = ({ password }) => {
  const calculateStrength = (password) => {
    // Implement your own password strength calculation logic here
    // Return a value between 0 and 5 indicating the strength
    // You can use regular expressions, length checks, etc.
    return Math.min(Math.floor(password.length / 2), 5);
  };

  const strength = calculateStrength(password);

  const bars = Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className={`h-1.5 mt-1 mb-8 border w-1/5 mx-1 rounded-full border-[#99A4E1] ${
        index < strength ? 'bg-[#99A4E1]' : 'bg-transparent'
      }`}
    ></div>
  ));

  return <div className="flex mt-2">{bars}</div>;
};

export default PasswordStrengthIndicator;
