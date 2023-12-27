import React from 'react';
import { getFunName } from '../helper';


class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. stop the form from submitting (to not relaod the page)
    event.preventDefault();
    // 2. get the text from the input
    const store = this.myInput.current.value;
    // 3. change the page to the store form the input. we need to access to react router
    // this.something(`/store/${store}`);


  }
  render() {
   return (
     <form className='store-selector' onSubmit={this.goToStore}>
       <h2> Please Enter A Store </h2>
       <input
         type='text'
         ref={this.myInput}
         required placeholder='Store Name' defaultValue={getFunName()} />
       <button type='submit'> Visit Store </button>
     </form>
   );
  }
}

export default StorePicker;
