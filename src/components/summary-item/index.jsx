import { Link } from 'gatsby';
import React from 'react';

const spacing = {
  padding: '10px',
};

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};


const SummaryItem = ({ name, description, duty, link = false, internal = false  }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
      <div className={classes.wrapper} style={spacing} >
      <ul>
        <li><p className={classes.description}>{duty}</p></li>
      </ul>

      </div>
    </div>
  );
};

export default SummaryItem;
