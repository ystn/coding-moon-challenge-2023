import MapTopBar from "./MapTopBar";
import greenSpace from '../assets/green-space.png'

export default function MapPage() {
    return <div style={{margin: 0, padding: 0, height: '100vh', backgroundImage: `url(${greenSpace})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <MapTopBar level={3} />

    </div>
}