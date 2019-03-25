const Menu = ({ items , opened = false }) => {
  if (!items) {
    return null;
  }

  if (!items.length) {
    return <p>Список пуст!</p>;
  } else if (opened) {
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span></span></div>
        <nav>
          <ul>
            {items.map((item, index) => <li key={index}><a href={item.href}>{item.title}</a></li>)}
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <div className="menu-toggle"><span></span></div>
      </div>
    );
  }
}