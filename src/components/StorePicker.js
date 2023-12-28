import React from 'react';
import { getFunName } from '../helper';

class StorePicker extends React.Component {
  // we create ref has a queryselector
  myInput = React.createRef();
  //handle submitting button with property to be able to access to this inside
  goToStore = (event) => {
    // 1. stop the form from submitting (to not relaod the page)
    event.preventDefault();
    // 2. get the text from the input, typing console.log(this) we find the result
    const store = this.myInput.current.value;
    // 3. change the page to the store form without to refresh the page. we need to access to react router
    this.props.history.push(`/store/${store}`);

  }
  render() {
   return (
     <form className='store-selector' onSubmit={this.goToStore}>
       <h2> Please Enter A Store </h2>
       <input
         type='text'
         // we have to ref the input in order to be able to re use it, it is like a querySelector
         ref={this.myInput}
         required placeholder='Store Name' defaultValue={getFunName()} />
       <button type='submit'> Visit Store </button>
     </form>
   );
  }
}

export default StorePicker;
