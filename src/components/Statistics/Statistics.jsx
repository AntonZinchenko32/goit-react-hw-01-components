import css from './Statistics.module.css'
import  StatisticsItem  from './StatisticsItem';


export default function Statistics({ title, stats }) {
    
    return (

        <section className={css.statistics}>
        
            {title && (
                <h2 className="title">Upload stats</h2>
            )}
        
            <ul className={css.statList}>
                {stats.map(({id, label, percentage}) => (
                    <StatisticsItem
                        key={id}
                        id={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </ul>
        </section>
    )
}


 