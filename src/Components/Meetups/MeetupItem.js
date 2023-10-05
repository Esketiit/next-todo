import classes from './MeetupItem.module.css'

function MeetupItem (props) {

  return (
    <li className={classes.item}>
      <div classname={classes.image}>
          <img src={props.image} alts={props.title}/>
      </div>
      <div classname={classes.title}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button>ADD TO FAVORITES</button>
        </div>
      </div>
    </li>
  )
}

export default MeetupItem