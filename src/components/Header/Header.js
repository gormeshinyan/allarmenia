import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <div className='app'>
         <Link to='/home'>
        homepage
      </Link>
      <Link to='/about'>
        aboutpage
      </Link>
      <Link to='/contact'>
        contactpage
      </Link>
        </div>
    )
}