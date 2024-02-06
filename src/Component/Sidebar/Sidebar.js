import React from 'react';
import TitleLogo from '../../assets/codepen-logo-icon-png-svg.png';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/FireBaseSetup';

const SideBar=(prop)=> {
    


  return (
    <div style={{backgroundColor:"#1E1F26"}} className=' w-44 fixed h-screen p-3 text-white'>
       <Link to={auth.currentUser==null?"/":"/demo"}><div><img src={TitleLogo} /></div></Link> 
       <div className=' mt-4'>
        <h6 className=' text-xs mb-2 font-semibold text-stone-400 ml-3'>TRY OUR ONLINE EDITOR</h6>
        
        <div >
            <button onClick={prop.StartcodingFn} className=' bg-black text-white border-2 border-red-500 py-3 text-base font-semibold px-4 m-3 rounded-md'>
                Start Coding
            </button>
        </div>
        
        <Link to='/Main/Search/Pens'><div className=' ml-3 mt-3'>Search Pens</div></Link>
        <Link to='/Main/challenges'><div className=' ml-3 mt-3'>Challenges</div></Link>
        <Link to='/Main/sparks'><div className=' ml-3 mt-3'>Spark</div></Link>
        {
          auth.currentUser && <Link to='/Main/yourwork'><div className=' ml-3 mt-3'>YourWork</div></Link>
        }
        </div> 
    </div>
  )
}

export default SideBar