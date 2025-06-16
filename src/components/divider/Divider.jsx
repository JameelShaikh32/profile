import './divider.css';
import { services } from '../../constants';

const Divider = () => {
    const serviceText = services.map((service) => (
        <span key={service.title} className='divider-titles'>
            {service.title.toUpperCase()}
        </span>
    ));

    return (
        <div className="divider">
            {['one', 'two'].map((lineClass) => (
                <div key={lineClass} className={`divider-line ${lineClass}`}>
                    <h2>
                        <div className="marquee-inner">
                            <div className="marquee-group">{serviceText}</div>
                            <div className="marquee-group">{serviceText}</div>
                        </div>
                    </h2>
                </div>
            ))}
        </div>
    );
}

export default Divider;