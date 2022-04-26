import "./Style/searchVideoBar.scss"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';



function SearchBar() {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="searchBar">
        <div className="filters">
            <FormControl sx={{ m: 1, minWidth: '10vw' }}>
            <InputLabel id="demo-simple-select-helper-label"style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Search By</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={filter}
            label="Search By"
            onChange={handleChange}
            >
            <MenuItem value="">
                <em>PlaceHolder</em>
            </MenuItem>
            <MenuItem value={10}>User</MenuItem>
            <MenuItem value={20}>Category</MenuItem>
            <MenuItem value={30}>Date</MenuItem>
            </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: '10vw' }}>
            <InputLabel id="demo-simple-select-helper-label"style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Value</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={filter}
            label="Value"
            onChange={handleChange}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>5</MenuItem>
            <MenuItem value={20}>4</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={40}>Less than 4</MenuItem>
            </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: '10vw'}}>
            <InputLabel id="demo-simple-select-helper-label" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}> <LocalOfferIcon style={{fontSize: '2vh', marginRight: '0.5vw'}}/> Tags </InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={filter}
            label="Tags"
            onChange={handleChange}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Good</MenuItem>
            <MenuItem value={20}>TroubleShooting</MenuItem>
            <MenuItem value={30}>Fast</MenuItem>
            </Select>
            </FormControl>
        </div>
            <Button
            style={{
                backgroundColor: '#ff9900',
                color: '#ffffff',
                width: '8.5vw',
                height: '5.25vh',
                justifyContent: 'center',
                borderRadius: '2vw',
                boxShadow: '0 0.45vh 0 0 rgba(0, 0, 0, 0.05)',
                fontWeight: 500,
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
            >
                <SearchIcon style={{marginRight: '0.5vw', fontWeight: 'large'}}/> SEARCH
            </Button>
    </div>
  );
}

export default  SearchBar;