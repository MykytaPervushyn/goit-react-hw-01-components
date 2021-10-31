import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function StatisticalItem({ id, label, percentage }) {
  return (
    <li className={s.item} id={id}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticalItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
