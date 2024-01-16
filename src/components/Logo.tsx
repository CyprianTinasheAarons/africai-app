import React from 'react';
import Image from 'next/image';
import logo from './logo.png';

export function Logo() {

  return (
    <Image src={logo} alt="Logo" width={500} height={500}  className='w-4/5 h-auto'/>
  )
}
