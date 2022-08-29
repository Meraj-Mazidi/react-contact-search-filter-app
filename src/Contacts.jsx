import React from 'react';

const Contacts = ({ data }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                    <th>Gender</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td className='numbers'>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Contacts;
