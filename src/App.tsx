
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';



function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h4>Test data-picker</h4>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>


      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'DatePicker',
            'MobileDatePicker',
            'DesktopDatePicker',
            'StaticDatePicker',
          ]}
        >
          <DemoItem label="Desktop variant">
            <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
          </DemoItem>
          <DemoItem label="Mobile variant">
            <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
          </DemoItem>
          <DemoItem label="Responsive variant">
            <DatePicker defaultValue={dayjs('2022-04-17')} />
          </DemoItem>
          <DemoItem label="Static variant">
            <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </>
  )
}

export default App
