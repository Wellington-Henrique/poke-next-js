import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div>
            <Image 
                src="/images/pokeball.png" 
                width="30" 
                height="30" 
                alt='PokeNext'
            />
            <h1>PokeNext</h1>
        </div>

        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>Sobre</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar