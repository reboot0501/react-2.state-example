// 첫번째 생성 Component
import React, { Component } from 'react';


import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends Component {

    

    render() {

        const { onSearchTitle } = this.props;

        return (
            <TextField
                InputProps={{
                    endAdornment: ( // 돋보기 아이콘 좌측 맨 앞 startAdornment, 돋보기 아이콘 우측 끝 endadornment
                        <InputAdornment position="end"> { /* 돋보기 아이콘 좌측 맨 앞 position="start", 돋보기 아이콘 우측 끝 position="end" */} 
                            <SearchIcon />
                        </InputAdornment>
                        ),
                }}
                onChange = { e => onSearchTitle(e.target.value) }
            />            
        )
    }

}

export default SearchBar;