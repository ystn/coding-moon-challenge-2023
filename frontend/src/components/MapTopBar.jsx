import PropTypes from 'prop-types';
import Radar from './radar/Radar';

export default function MapTopBar({level = 3}) {
    return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#000000aa', width: '100wh', height: '3em', margin: 0, padding: '0 1em'}}>
        <Radar level={level} />
    </div>
}

MapTopBar.protoTypes = {
    level: PropTypes.number.isRequired,
}