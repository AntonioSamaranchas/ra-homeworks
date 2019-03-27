const Calendar = ({date}) => {
  if (!date) {
    return null;
  }

  function parseDate() {
    let full = {
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
  
    let monthnm = {
      month: 'long'
    }

    function ucFirst(str) {
      if (!str) return str;
    
      return str[0].toUpperCase() + str.slice(1);
    }

    const strDate = date.toLocaleString("ru", full).replace(',','').split(' ');
    const nominative = date.toLocaleString("ru", monthnm);
    let [weekday, day, month] = strDate;
    
    return {
      'weekday': ucFirst(weekday),
      'month': month,
      'nominative': ucFirst(nominative)
    }
  }

  function getDataOfMonth() {
    const delta = [6, 0, 1, 2, 3, 4, 5];
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = date.getDate();
    const amount = new Date(year, month + 1 , 0).getDate();
    const firstDelta = delta[new Date(year,month, 1).getDay()];
    let lastDelta = new Date(year, month + 1, 0).getDay();
    lastDelta = (lastDelta === 0) ? lastDelta : 7 - lastDelta;

    const days = [];
    let week = [];
    for (let index = 1 - firstDelta; index <= amount + lastDelta; index++) {
      const currMonth = (index > 0 && index <= amount);
      const day = {
        'class': (!currMonth) ? 'ui-datepicker-other-month' : (index === today) ? 'ui-datepicker-today' : '',
        'day': new Date(year, month, index).getDate()
      }
      
      week.push(day);
      if (week.length === 7) {
        days.push(week);
        week = [];
      } 
    }

    return days;   
  }

  const dataDate = parseDate();
  const days = getDataOfMonth();
  
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{ dataDate.weekday }</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{ date.getDate() }</div>
          <div className="ui-datepicker-material-month">{ dataDate.month }</div>
          <div className="ui-datepicker-material-year">{ date.getFullYear() }</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{ dataDate.nominative }</span>&nbsp;<span class="ui-datepicker-year">{ date.getFullYear() }</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          { days.map((week, index) => <tr key ={index}>{ week.map((item, i) => <td key ={i + 1} className={item.class}>{item.day}</td>) } </tr>) }
        </tbody>
      </table>
  </div>
  );
}