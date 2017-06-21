import React from 'react';
import {TextField, Input, Button} from 'wix-style-react';
import s from './App.scss';

class SearchInput extends React.Component {
  render() {
    const {placeholder, onChange} = this.props;
    return (
      <div>
        <div className={s.searchInputTextField}>
          <TextField>
            <Input id="movieNameTextField" placeholder={placeholder} onChange={onChange}/>
          </TextField>
        </div>
        <Button height="medium" theme="fullblue" >Search!</Button>
      </div>
    );
  }
}


export default SearchInput;
