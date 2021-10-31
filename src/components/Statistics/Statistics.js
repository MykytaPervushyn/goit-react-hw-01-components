import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticalItem from './StatisticalItem';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statList}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.listItem}>
        {stats.map(item => (
          <StatisticalItem id={item.id} label={item.label} percentage={item.percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
