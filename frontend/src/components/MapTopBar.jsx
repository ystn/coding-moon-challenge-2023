import PropTypes from 'prop-types';
import Radar from './radar/Radar';

export default function MapTopBar({level = 3}) {
    return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(256, 256, 256, 0.8%)', width: '100%', height: '10vh', margin: 0, padding: '0 1em'}}>
        <Radar level={level} />
    </div>
}

MapTopBar.protoTypes = {
    level: PropTypes.number.isRequired,
}