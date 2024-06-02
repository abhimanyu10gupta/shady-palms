"use client"

import { partySizeArr, times } from '@/constants';
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers';

import React from 'react'




const ReserveTable = () => {

  const [partySize, setPartySize] = React.useState('');
  const [time, setTime] = React.useState('');

  const handleChangeTime = (event: SelectChangeEvent) => {
    setTime(event.target.value as string);
  };

  const handleChangeSize = (event: SelectChangeEvent) => {
    setPartySize(event.target.value);
  };

  return (
    <div className='w-screen flex justify-center p-16 flex-col '>
      <div className='w-full flex justify-center'>
        <p className='text-white text-6xl '>
          Reserve a Table
        </p>
      </div>

      <div className='flex w-full justify-center text-white p-32 md:flex-col m-auto'>
        <div className='flex basis-1/4 flex-col justify-center m-auto' >
          <div className='text-white flex'>
            <FormControl sx={{ m: 1, width: 300 }}>
              {/* <InputLabel id="demo-multiple-name-label" className='text-white'>Party size</InputLabel> */}
              <TextField id="outlined-basic" label="Party Size" variant="standard" defaultValue={""} helperText="Please call use if booking for more than 6 people" color='primary' />
              
            </FormControl>
          </div>
          </div>
          <div className='flex basis-1/4 flex-col m-auto'>
          {/* <p className='text-xs'>
              Date
            </p> */}
            <div className='flex'>
              <DatePicker sx={{m: 1, width: 300}} />
            </div>
          </div>
          <div className='flex basis-1/4 flex-col m-auto'>
            {/* <p className='text-xs'>
              Time
            </p> */}
            <div className='flex'>
              <FormControl sx={{m: 1, width:300}}>
                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={time}
                  label="Time"
                  onChange={handleChangeTime}
                  // label={{ color: '#ff0000' }}
                  sx={{
                    
                    color: "white",
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '.MuiSvgIcon-root ': {
                      fill: "white !important",
                    },
                    width: '100%'
                  }}
                >
                  {times.map((time) => (
                    <MenuItem 
                      key={time}
                      value={time}
                      >
                      {time}
                      </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className='flex basis-1/4 justify-center items-center' >
            <Button>
              Reserve
            </Button>
          </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default ReserveTable