import Contacts from "../components/Contacts/Contacts";
import Header from "../components/Header/Header";

export default function ContactsPage() {

    return <>
        <Header />
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <Contacts />
        </div>
    </>
}