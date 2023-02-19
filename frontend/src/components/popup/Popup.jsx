import { useState } from "react";
import Slider from "../slider/Slider";
import wifiSolid from '../../assets/wifi-solid.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Radar from "../radar/Radar";

export default function({ name, initialValue }) {
    const [value, setValue] = useState(initialValue);

    return <div style={{display: 'flex', flexDirection: 'column', width: '15em', fontFamily: 'sans-serif', padding: '1em 1em', borderRadius: "25px", borderStyle: 'solid', borderWidth: '1px'}}>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}>
            <h2>{name}</h2>
            {/* <FontAwesomeIcon icon="fa-solid fa-wifi"/> */}
            <div style={{flex: 1}}></div>
            {/* <img src={wifiSolid} alt="wifi" style={{width: '2em', height: '2em'}} fill='#039E25' /> */}
            <Radar level={3}/>
        </div>
        <p>frequency: {value}MHz</p>
        {/* <input type="range" min="0" max="100" value={value} onChange={(e) => setValue(e.target.value)} style={{margin: '0 0 1em 0', color: '#039e25'}} /> */}
        <Slider value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
}