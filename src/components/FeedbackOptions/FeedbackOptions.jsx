import PropTypes from 'prop-types';
import { Conteiner, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Conteiner>
    {options.map((option, index) => (
      <Button
        key={index}
        type="button"
        onClick={() => onLeaveFeedback({ option })}
      >
        {option[0].toUpperCase() + option.slice(1)}
      </Button>
    ))}
  </Conteiner>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
