import React, { useState } from "react"


function SendMessage() {
    const [msg, setMsg] = useState('')
     return(
         <div>
             <form>
                 <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Say Something..."/>
                 <Button>Send</Button>
             </form>
         </div>
     )
}

export default SendMessage