import './Slider.css';

export default function Slider({value, onChange}) {
    return <div className={Slider.slider}>
        <input type="range" min="0" max="100" value={value} onChange={onChange} />
    </div>
}