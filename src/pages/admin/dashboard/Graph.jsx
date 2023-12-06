import React , {useState} from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const uData = [.4, 2, 1, 1.5, 1.5, 2.5, 2.2];
const pData = [1, 0.3, 1, 1, 2, 0.5, 0.4];
const xLabels = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
];

const Graph = () => {
  const [age , setAge] = useState('');

  const handleChange = (event)=>{
  const data = event?.target?.value
  setAge(data)
  console.log(data)
  }

  return (
    <>
      <div className='flex justify-between gap-5'>
        <div className='box-shadow p-5 pb-0 w-1/2 rounded-2xl'>
          <div>
            <h2 className='text-sm font-semibold text-[#272727]'>
              Total Signups
            </h2>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <BarChart
            width={500}
            height={300}
            series={[
              { data: pData, label: 'Client Service', id: 'pvId' },
              { data: uData, label: 'Service Providers', id: 'uvId' },
            ]
            }
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
          />
        </div>
        <div className='box-shadow p-5 pb-0 w-1/2 rounded-2xl'>
          <h2 className='text-sm font-semibold text-[#272727]'>
            Total Book Now Clicks
          </h2>
          <BarChart
            width={500}
            height={300}
            series={[
              { data: pData, label: 'Client Service', id: 'pvId' },
              { data: uData, label: 'Service Providers', id: 'uvId' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
          />
        </div>
      </div>
    </>
  )
}

export default Graph