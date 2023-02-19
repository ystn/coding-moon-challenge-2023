import Image from 'next/image'
import BeeHappy from '../assets/BeeHappy.png'

export default function NavBar() {
    return <div className='shadow-md' style={{ height: '6em', width: '100wh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F0EDE6', fontFamily: 'sans-serif', padding: '0 2em' }}>
        <Image src={BeeHappy} alt='logo' height={50} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '20em', fontSize: '0.75em' }}>
            <a href='#' style={{ textDecoration: 'none', color: 'black', margin: '0 1em', fontWeight: 'lighter' }}>FEATURES</a>
            <a href='#' style={{ textDecoration: 'none', color: 'black', margin: '0 1em', fontWeight: 'lighter' }}>COMMUNITY</a>
            <a href='#' style={{ textDecoration: 'none', color: 'black', margin: '0 1em', fontWeight: 'lighter' }}>CONTACT</a>
            <a href='#' style={{ textDecoration: 'none', color: 'black', margin: '0 1em', fontWeight: 'lighter' }}>ABOUT</a>

        </div>
        <button style={{ backgroundColor: '#d29b37', color: 'white', border: '0px', padding: '0.5em 1em', borderRadius: '3px' }}>GET STARTED</button>
    </div>
}