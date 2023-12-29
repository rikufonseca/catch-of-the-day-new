import React from 'react';

class AddFishForm extends React.Component {
	render() {
		return (
			<form className="fish-edit">
        <input name='name' type="text" placeholder="Name"/>
        <input name='price' type="text" placeholder="Price"/>
        <input name='status' type="text" placeholder="Status"/>
        <input name='desc' type="text" placeholder="Desc"/>
        <button type="submit"> + Add Fish </button>
      </form>
		);
	}
}

export default AddFishForm;
