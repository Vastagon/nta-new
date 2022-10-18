export default function AcceptedEmail({setShowAcceptedCard}){
    return(
        <div className="failed-email-card-container">
            <div className="failed-email-card">
                <h2>Email Sent</h2>
                <button onClick={() => setShowAcceptedCard(false)}>Close</button>
            </div>
        </div>
    )
}