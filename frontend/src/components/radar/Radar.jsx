import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import wifiSolid from '../../assets/wifi-solid.svg';

export default function Radar({level = 0}) {
    // const [level, setLevel] = useState(0);

    return <img src={wifiSolid} alt="wifi" style={{width: '2em', height: '2em'}} fill='#039E25' />

    if (level === 0) {
        return <div><FontAwesomeIcon icon="fa-solid fa-wifi-slash" /></div>
    }
    if (level === 1) {
        return <div><FontAwesomeIcon icon="fa-solid fa-wifi-weak" /></div>
    }
    if (level === 2) {
        return <div><FontAwesomeIcon icon="fa-solid fa-wifi-fair" /></div>
    }
    if (level === 3) {
        return <div><FontAwesomeIcon icon="fa-solid fa-wifi" /></div>
    }
    return <div><FontAwesomeIcon icon="fa-solid fa-wifi-slash" /></div>
}

Radar.protoTypes = {
    level: PropTypes.number.isRequired,
}