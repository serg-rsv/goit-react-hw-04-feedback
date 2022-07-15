import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Button } from './Button.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Fragment>
      {options.map(key => {
        return (
          <Button key={key} type="button" onClick={() => onLeaveFeedback(key)}>
            {key}
          </Button>
        );
      })}
    </Fragment>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
