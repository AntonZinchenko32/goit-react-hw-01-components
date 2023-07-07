import css from './Statistics.module.css'
import PropTypes from "prop-types"



export default function Statistics({ title, stats }) {
    
    return (

        <section className={css.statistics}>
        
            {title && (
                <h2 className="title">{title}</h2>
            )}
        
            <ul className={css.statList}>
                {stats.map(({id, label, percentage}) => (
                    <li key={id} className={css.listItem}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage:PropTypes.number     
    }))
}

