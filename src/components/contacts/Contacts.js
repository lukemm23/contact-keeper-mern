import React, { Fragment,useContext, useEffect } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ContactContext from '../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layouts/Spinner';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {getContacts, loading, contacts, filtered} = contactContext;

    useEffect(()=>{
        getContacts();
        //eslint-disable-next-line
    }, []);

    if(contacts !== null && contacts.length ===0 && !loading){
        return <h4>Please add a contact</h4>
    }

    return(
        <Fragment>
            {contacts !== null && !loading ? (<TransitionGroup>
            {filtered !== null ? filtered.map(contact => (<CSSTransition timeout={500} classNames="item" key={contact._id}><ContactItem
             contact={contact} /></CSSTransition>)) : contacts.map(contact => (
                <CSSTransition timeout={500} classNames="item" key={contact._id}><ContactItem contact={contact} /></CSSTransition>
            ) )}
            </TransitionGroup>) : <Spinner/>}
            
        </Fragment>
    )
}



export default Contacts;