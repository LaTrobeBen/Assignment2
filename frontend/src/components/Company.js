import { useState } from 'react';

function Company(props) {
    const {contact, company, companies, setCompanies} = props;
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        company_name: company.company_name,
        company_address: company.company_address
    });

    async function deleteCompany() {
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/companies/' + company.company_id, {
            method: 'DELETE',
        });

        let newCompanies = companies.filter((c) => {
            return c.company_id !== company.company_id;
        });

        setCompanies(newCompanies);
    }

    async function updateCompany() {
        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/companies/' + company.company_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name: editForm.company_name,
                company_address: editForm.company_address
            })
        });

        if (response.ok) {
            const updatedCompanies = companies.map((c) => {
                if (c.company_id === company.company_id) {
                    return {
                        ...c,
                        company_name: editForm.company_name,
                        company_address: editForm.company_address
                    };
                }
                return c;
            });
            setCompanies(updatedCompanies);
            setIsEditing(false);
        }
    }

    function cancelEdit() {
        setEditForm({
            company_name: company.company_name,
            company_address: company.company_address
        });
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <tr>
                <td>
                    <input 
                        type='text' 
                        value={editForm.company_name} 
                        onChange={(e) => setEditForm({...editForm, company_name: e.target.value})}
                        onClick={(e) => e.stopPropagation()}
                    />
                </td>
                <td>
                    <input 
                        type='text' 
                        value={editForm.company_address} 
                        onChange={(e) => setEditForm({...editForm, company_address: e.target.value})}
                        onClick={(e) => e.stopPropagation()}
                    />
                </td>
                <td style={{ width: '14px' }}>
                    <button className="button green" onClick={updateCompany}>Save</button>
                    <button className="button red" onClick={cancelEdit}>Cancel</button>
                </td>
            </tr>
        );
    }

	return (
		<tr>
            <td>{ company.company_name }</td>
            <td>{ company.company_address }</td>
            <td style={
                {
                    width: '14px',
                }
            }>
                <button className="button green" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="button red" onClick={deleteCompany}>Delete</button>
            </td>
        </tr>
	);
}

export default Company;
