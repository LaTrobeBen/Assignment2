import { useState } from 'react';

function NewPhone(props) {
    const {contact, phones, setPhones} = props;
    const [number, setNumber] = useState('');
    const [phoneType, setPhoneType] = useState('Home');

    async function createPhone(e) {
        e.preventDefault();
        
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/phones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                number,
                name: phoneType
            })
        });

        const data = await response.json();

        if (data.id) {
            setPhones([...phones, data]);
        }

        setNumber('');
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

            <input type='text' placeholder='Phone Number' onChange={(e) => setNumber(e.target.value)} value={number}/>
            <button className='button green' type='submit'>Add {contact.name}'s phone</button>
        </form>
	);
}

export default NewPhone;