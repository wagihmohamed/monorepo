import React from 'react';

interface CustomButtonProps {
  buttonText: React.ReactNode;
}

const CustomButton = ({ buttonText }: CustomButtonProps) => {
  return <button>{buttonText}</button>;
};

export default CustomButton;
