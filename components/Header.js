import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Brands
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Categories
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Contacts
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
