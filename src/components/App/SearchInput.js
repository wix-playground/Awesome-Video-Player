import React from 'react';
import {TextField, Input, Button} from 'wix-style-react';
import s from './App.scss';

class SearchInput extends React.Component {
  render() {
    return (
      <div>
        <div className={s.searchInputTextField}>
          <TextField>
            <Input id="movieNameTextField" placeholder={this.props.placeholder}/>
          </TextField>
        </div>
        <Button height="medium" theme="fullblue" >Search!</Button>
      </div>
    );
  }
}


export default SearchInput;
