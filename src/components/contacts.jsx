import './contacts.css'
export default function Contacts() {
    return (
        <>
            <main>
            <div className="containerContacts">
                <h1><span id='colored'>Contacts</span></h1>
                
                    <ul>
                        <li >  
                            <h2>Location</h2>
                            <p>Russia, Kazan</p>
                        </li>
                        <li >  
                            <h2>Social links</h2>
                            <p><a className='socLink' href="https://wa.me/79172619083">Whatsapp</a></p>
                            <p><a className='socLink' href="https://t.me/ravenenen">Telegram</a></p>
                            <p>+79172619083</p>
                        </li>
                        <li >  
                            <h2>Email</h2>
                            <p>mirkhaydar4@gmail.com</p>
                        </li>
                    </ul>
                
            </div>








            </main>
        </>
    )
}