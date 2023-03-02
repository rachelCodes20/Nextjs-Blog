import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css'

function NavBar() {
  return (
    <> 
      <div>
          <ul className={styles.navUL}>
              <li className={styles.navLI}>Home</li>
              <li className={styles.navLI}>News</li>
              <li className={styles.navLI}>Contact</li>
              <li className={styles.navLI}>About</li>
          </ul>
      </div>
    </>
   
  )
}

export default NavBar