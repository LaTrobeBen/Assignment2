import { useState } from 'react';

function NewPhone(props) {
    const {contact, phones, setPhones} = props;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneType, setPhoneType] = useState('Home');

    async function createPhone(e) {
        e.preventDefault();
        
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/phones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone_number: phoneNumber,
                phone_type: phoneType
            })
        });

        const data = await response.json();

        if (data.id) {
            setPhones([...phones, data]);
        }

        setPhoneNumber('');
        setPhoneType('Home');
    }

	return (
        <form onSubmit={createPhone} onClick={(e) => e.stopPropagation()} className='new-phone'>
            <select value={phoneType} onChange={(e) => setPhoneType(e.target.value)}>
                <option value={"Home"}>Home</option>
                <option value={"Work"}>Work</option>
                <option value={"Mobile"}>Mobile</option>
                <option value={"Other"}>Other</option>
            </select>

            <input type='text' placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/>
            <button className='button green' type='submit'>Add {contact.name}'s phone</button>
        </form>
	);
}

export default NewPhone;