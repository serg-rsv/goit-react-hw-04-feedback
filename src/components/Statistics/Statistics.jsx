import PropTypes from 'prop-types';
import { StatField } from './StatField.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatField>Good: {good}</StatField>
      <StatField>Neutral: {neutral}</StatField>
      <StatField>Bad: {bad}</StatField>
      <StatField>Total: {total}</StatField>
      <StatField>Positive feedback: {positivePercentage}%</StatField>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
