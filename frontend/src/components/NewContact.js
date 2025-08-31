import { useState } from 'react';

function NewContact(props) {
    const {contacts, setContacts} = props;
    const [contactDetails, setContactDetails] = useState({
        name: '',
        address: ''
    });

    async function createContact(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: contactDetails.name,
                address: contactDetails.address
            })
        });

        const data = await response.json();

        if (data.id) {
            setContacts([...contacts, data]);
        }

        setContactDetails({
            name: '',
            address: ''
        });
    }

	return (
        <form className='new-contact' onSubmit={createContact}>
            <label for='Name'>Contact Name:</label>
            <input id='Name' type='text' placeholder='Name' onChange={(e) => setContactDetails({...contactDetails, name: e.target.value})} value={contactDetails.name}/>
            
            <label for='Address'>Contact Address:</label>
            <input id='Adress' type='text' placeholder='Address' onChange={(e) => setContactDetails({...contactDetails, address: e.target.value})} value={contactDetails.address}/>
            <button className='button green' type='submit'>Create Contact</button>
        </form>
	);
}

export default NewContact;