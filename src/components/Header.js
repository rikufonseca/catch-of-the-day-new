import React from 'react';
// here we have in our function only a render method, so we don't need to create a component with class Header extends React.Component
// there is no this so we put props in argument
const Header = ({tagline}) => (
  <header className='top'>
    <h1> Catch
      <span className="ofThe">
        <span className='of'> Of </span>
        <span className='the'> The </span>
      </span>
      Day
    </h1>
     <h3 className='tagline'>
       <span> {tagline} </span>
    </h3>
  </header>
)

export default Header;
