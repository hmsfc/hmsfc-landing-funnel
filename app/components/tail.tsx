'use client'

import Link from "next/link"
import styles from "../styles/tail.module.css"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"

interface TailProps {
    ctrlLinks? : {
        label: string,
        url: string,
        icon: string
    }[],
    activeIcon? : any
}

const Tail: React.FC<TailProps> = (props) => {

        const router = useRouter()
  const pathname = usePathname()

    const {ctrlLinks} = props


    const shiftHandler = (url:any) => {
        router.push(url)
    }


    const renderLinks = ctrlLinks?.map((link:any,i:any)=>{


        return (
        <div onClick={()=> shiftHandler(link.url)} className={styles.control} key={i}>
        <Image src={`/icons/${(link.url===pathname)?'active':'inactive'}/${link.icon}.svg`} 
        alt="alt" width={24} height={24} />
        <Link   style={{
            color: `${(link.url===pathname)?'var(--active)': 'var(--inactive)'}`,fontSize: '10px',
            listStyle:'none', textDecoration: 'none'}}  href={link.url}>
            {link.label}
        </Link>
        </div>
                      
        )
    })

    return(
        <div className={styles.tail}>
            {renderLinks}
        </div>
    )
}

export default Tail