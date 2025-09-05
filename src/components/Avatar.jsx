import React from 'react'
import ProfilePic1 from '../assets/profilePic1.jpg';
import ProfilePic2 from '../assets/profilePic2.jpg';
import ProfilePic3 from '../assets/profilePic3.jpg';

const Avatar = () => {
  return (
    <div>
          <div className="flex -space-x-4 rtl:space-x-reverse "  data-testid="flowbite-avatar" >
    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={ProfilePic1} alt=""/>
    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={ProfilePic2} alt=""/>
    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={ProfilePic3} alt=""/>
    <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
</div>
    </div>
  )
}

export default Avatar