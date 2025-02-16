
"use client"
import FrontendSection from './components/frontend';
import BackendSection from './components/backend';
import DevDependecies from './components/dev-dependencies';
import CommandLine from './components/commandLine';
import { useState } from 'react';

export default function Home() {

  const [typeToggle, setTypeToggle] = useState(false);

  return (
    <div>
   
      <br /> <br /> 
      <div className='container  m-auto grid grid-cols- gap-5 sm:grid-cols-3'>
        <BackendSection toggle={typeToggle} />
        <FrontendSection toggle={typeToggle} />
        <DevDependecies />
      </div>

      <br /><br /><br /><br /><br /> <br />

      <CommandLine toggle={typeToggle} setToggle={setTypeToggle}/>
      
    </div>
  );
}

