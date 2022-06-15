import UnReadMessages from  './UnReadMessages';

const message =["good morning","Hii","hey","good night!"]
 
function Mailbox (){

    return (
        <>
        <h1>Mail Box</h1>
        <UnReadMessages unreadmessages = {message}/>
        </>    
    );
}

export default Mailbox;
