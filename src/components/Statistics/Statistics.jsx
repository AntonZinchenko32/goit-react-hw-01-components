import css from './Statistics.module.css'

const Statistics = ({title, stats}) => (
    <section className={css.statistics}>

        {title && (
            <h2 className="title">Upload stats</h2>
        )}
        
        <ul className="stat-list">
            {stats.map(stat => (
                <li key={stat.id} className="item">
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}</span>
                </li>
            ))}
        </ul>
    </section>
);

export default Statistics;