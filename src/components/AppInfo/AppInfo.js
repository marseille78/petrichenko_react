import PropTypes from 'prop-types';

import "./AppInfo.css";

const AppInfo = ({employers, likes}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employers}</h2>
      <h2>Премию получат: {likes}</h2>
    </div>
  );
};

AppInfo.propTypes = {
  employers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default AppInfo;