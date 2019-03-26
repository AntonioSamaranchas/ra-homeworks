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

  const dataDate = parseDate();
  
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
  </div>
  );
}