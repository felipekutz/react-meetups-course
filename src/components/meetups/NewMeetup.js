import Card from "../ui/Card";
import classes from "./NewMeetup.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="url" />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" />
        </div>

        <div className={classes.actions}>
          <button type='submit'>Add meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
