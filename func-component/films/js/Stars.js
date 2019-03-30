'use strict';

const Stars = ({count}) => {
  if (typeof count == Number && (count < 1 || count > 5)) {
    return null;
  }

  const arrIndex = [];
  for (let i = 0; i < count; i++) {
    arrIndex.push({id: i/*shortid.generate() - не работает*/});
  }

  return (
    <ul className="card-body-stars u-clearfix">
      { arrIndex.map((item) => <li key={item.id}><Star /></li>) }
    </ul>
  );
}

Stars.defaultProps = {
  count: 0
}