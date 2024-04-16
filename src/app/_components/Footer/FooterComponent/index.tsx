'use client'
import React from 'react'
import classes from './index.module.scss'
import { Footer } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(item => (
            <li key={item.title}>
              <Image src={item.icon} alt="" width={36} height={36} className={classes.icon} />
              <h5 className={classes.title}>{item.title}</h5>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer}>
        <Gutter className={classes.wrap}>
          <Link href="/">
            <Image src="/logo-white.svg" alt="" width={170} height={50} />
          </Link>
          <p>{footer.copyright}</p>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
