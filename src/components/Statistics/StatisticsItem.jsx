import PropTypes from "prop-types"
import css from './Statistics.module.css'

export default function StatisticsItem({ id, label, percentage }) {
    
    return (
        <li className={css.listItem}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
        </li>
    )
}


StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

