import React, { useState, useEffect } from 'react'

function Chat() {
    const [messages, setMessages] = useState()
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <signOut></signOut>

        </div>
    )
}

export default Chat