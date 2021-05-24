import NewMeetupForm from "../components/meetups/NewMeetup";

function NewMeetupPage(){
    function addMeetupHandler(meetupData){
        fetch('https://react-getting-started-d7957-default-rtdb.firebaseio.com/meetups.json',{
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section> 
    
}

export default NewMeetupPage;