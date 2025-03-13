import React from "react";
import { ButtonProps } from "@/models/button/button.model";
import Image from "next/image";

const CommonButton: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  srcImg, 
  altImg, 
  className
}) => {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center gap-2 rounded-xl px-2 py-2 transition-all duration-300 ${className}`}
    >
      {srcImg && altImg && (
        <Image
          className="mr-2 rounded-lg" 
          src={srcImg} 
          alt={altImg} 
          width={24} 
          height={24} 
        />
      )}
      {text}
    </button>
  );
};

export default CommonButton;
