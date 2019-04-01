'use strict';

const MessageHistory = ({list}) => {
  if (!list.length) {
    return null;
  } 
  
  const GetType = ({props}) => {
    const Mess = (props.type === 'response') ? Response : (props.type === 'message') ? Message : Typing;
    return <Mess from={props.from} message={props}/>
  }

  return (
    <ul>
      { list.map((message) => <li key={message.id}><GetType props={message} /></li>) }
    </ul>  
  )
}

MessageHistory.defaultProps = {
  list: []
}