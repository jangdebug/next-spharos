import React from 'react'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import SearchIcon from '../icons/SearchIcon'
import ShoppingBagIcon from '../icons/ShoppingBagIcon'
import TitleHeader from '../ui/TitleHeader'

export default function AuthServiceHeader() {
  return (
    <header className='flex flex-col justify-center w-full h-[56px] px-[16px]'>
      <nav>
        <ul className='flex justify-between'>
          <li>
            <ArrowLeftIcon />
          </li>
          <li className=' absolute left-[50%] translate-x-[-50%]'>
            <TitleHeader title='로그인' textStyle='text-xl' />
          </li>
          <li>
            <ul className='flex gap-4'>
              <li><SearchIcon /></li>
              <li><ShoppingBagIcon/></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
