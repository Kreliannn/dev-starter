
"use client"
import FrontendSection from './components/frontend';
import BackendSection from './components/backend';
import DevDependecies from './components/dev-dependencies';
import CommandLine from './components/commandLine';


export default function Home() {

  return (
    <div>
   
      <br /> <br /> 
      <div className='container  m-auto grid grid-cols- gap-5 sm:grid-cols-3'>
        <BackendSection />
        <FrontendSection />
        <DevDependecies />
      </div>

      <br /><br /><br /><br /><br /> <br />

      <CommandLine />
      
    </div>
  );
}

