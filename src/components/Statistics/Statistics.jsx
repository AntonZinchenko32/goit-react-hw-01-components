import css from './Statistics.module.css'
import  StatisticsItem  from './StatisticsItem';


export default function Statistics({ title, stats }) {
    
    return (

        <section className={css.statistics}>
        
            {title && (
                <h2 className="title">Upload stats</h2>
            )}
        
            <ul className="stat-list">
                {stats.map(stat => (
                    <StatisticsItem
                        key={stat.id}
                        id={stat.id}
                        label={stat.label}
                        percentage={stat.percentage}
                    />
                ))}
            </ul>
        </section>
    )
}


 