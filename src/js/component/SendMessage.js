import React, { useState } from "react"
import { db, auth } from '../index'
import { Input, Button } from '@material-ui/core'
import firebase from "firebase"

// function SendMessage({ scroll }) 
function SendMessage() {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        // scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Say Something..." />
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage