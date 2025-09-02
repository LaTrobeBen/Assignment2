import { useState } from 'react';

function NewCompany(props) {
    const {contact, companies, setCompanies} = props;
    const [companyInfo, setCompanyInfo] = useState({
        companyName: '',
        companyAddress: ''
    })

    async function createCompany(e) {
        e.preventDefault();
        
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/companies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name: companyInfo.companyName,
                company_address: companyInfo.companyAddress
            })
        });

        const data = await response.json();

        if (data.company_id) {
            setCompanies([...companies, data]);
        }

        setCompanyInfo({
            companyName: '',
            companyAddress: ''
        })
    }

	return (
        <form onSubmit={createCompany} onClick={(e) => e.stopPropagation()} className='new-company'>
            <input type='text' placeholder='Company Name' onChange={(e) => setCompanyInfo({...companyInfo, companyName: e.target.value})} value={companyInfo.companyName}/>

            <input type='text' placeholder='Company Address' onChange={(e) => setCompanyInfo({...companyInfo, companyAddress: e.target.value})} value={companyInfo.companyAddress}/>

            <button className='button green' type='submit'>Add {contact.name}'s company</button>
        </form>
	);
}

export default NewCompany;
