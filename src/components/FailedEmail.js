

export default function FailedEmail({setShowFailedCard}){
    return(
        <div className="failed-email-card-container">
            <div className="failed-email-card">
                <h2>Failed to send email, please try again</h2>
                <button onClick={() => setShowFailedCard(false)}>Close</button>
            </div>
        </div>
    )
}