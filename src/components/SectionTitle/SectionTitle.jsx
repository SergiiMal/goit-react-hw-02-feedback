import PropTypes from 'prop-types';
import { Title } from './SectionTitle.styled';

const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>;
};
export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
