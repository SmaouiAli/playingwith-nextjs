import {useRouter} from 'next/router';
import styles from '../styles/Toolbar.module.css';
import React, { useState } from 'react';
export const Toolbar = ()=>{
    const router = useRouter();
    const [view, setView] = useState(true);
   
    
    return (
        <div>
            
            {/* <img src="https://p.kindpng.com/picc/s/641-6419627_rbk-logo-rbk-tunisie-hd-png-download.png" className={styles.logo} /> */}
        <div className={styles.main}>
            {console.log(view)}
            
            <div onClick={()=> router.push('/')}>Home</div>
            <div onClick={()=> router.push('/feed/1')}>Feed</div>
            <div onClick={()=> router.push('/eom')}>EOM</div>
            <div onClick={()=> window.location.href ='https://www.youtube.com/watch?v=xtItzwYG6oQ&ab_channel=PortEXE' }>Twitter</div>
            <div onClick={()=> router.push('/descrip')}>test </div>
            <div className={styles.options} >
            <div  onClick={()=>setView(!view)} >Outcomes</div>
                {!view && <div className={styles.drop}>
                <h3 id={styles.opt}onClick={()=> {
                    router.push('/projects')
                    setView(!view)
            }}>Students projects hi</h3>
                <h3 id={styles.opt}onClick={()=> {
                    router.push('/report')
                    setView(!view)
            }}>Outcomes Report</h3>
             
                </div>}
            </div>
            

            
        </div>
        </div>
    )
    
};





