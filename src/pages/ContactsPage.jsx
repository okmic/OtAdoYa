import Header from "../components/Header/Header"
import BodyModal from "../components/Modal/BodyModal"

export default function ContactsPage() {

    return <>
        <Header />
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            }}>
            <BodyModal />
        </div>
    </>
}