import React from 'react'
import './style.css'
import Box from './Box.js'

function App() {
  return (
    <div>
      <Box boxClass="box1" title="My Title" subtitle="My Descriptive Subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <Box boxClass="box2" title="My 2nd Title" subtitle="My 2nd Descriptive Subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      <Box boxClass="box3" title="My 3rd Title" subtitle="My 3rd Descriptive Subtitle" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    </div>
  )
}

export default App