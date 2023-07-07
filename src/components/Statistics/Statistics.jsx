import css from './Statistics.module.css'
import PropTypes from "prop-types"

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {

    // Деструктуризуємо об'єкт стилів
    const { statistics, statList, listItem, labelStyled, percentageStyled } = css;
    
    return (

        <section className={statistics}>
        
            {title && (
                <h2 className="title">{title}</h2>
            )}
        
            <ul className={statList}>
                {stats.map(({id, label, percentage}) => (
                    <li
                        key={id}
                        className={listItem}
                        style={{
                            backgroundColor: getRandomHexColor(),
                            color:'white'
                        }}
                    >
                        <span className={labelStyled}>{label}</span>
                        <span className={percentageStyled}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired     
    }))
}

