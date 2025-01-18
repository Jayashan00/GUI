import React, { useState } from 'react';
import '../styles/Attendees.css';

const attendees = [
    { id: 1, name: 'Sunil', email: 'Sunil.doe@gmail.com', status: 'Confirmed', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 2, name: 'Kasun', email: 'kasun.@gmail.com', status: 'Pending', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 3, name: 'Amal', email: 'amal.brown@gmail.com', status: 'Cancelled', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 4, name: 'Wimali', email: 'wimali.white@gmail.com', status: 'Pending', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 5, name: 'Namali', email: 'namali.gray@gmail.com', status: 'Confirmed', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 6, name: 'Kamal', email: 'kamal@example.com', status: 'Confirmed', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 7, name: 'Nimal', email: 'nimal@example.com', status: 'Cancelled', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    
    { id: 9, name: 'Janith', email: 'janith@example.com', status: 'Confirmed', image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 10, name: 'Thilina', email: 'thilina@example.com', status: 'Cancelled', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 11, name: 'Chathuri', email: 'chathuri@example.com', status: 'Pending', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 12, name: 'Ruvina', email: 'ruvina@example.com', status: 'Confirmed', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    
    { id: 14, name: 'Nishan', email: 'nishan@example.com', status: 'Pending', image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 15, name: 'Ishara', email: 'ishara@example.com', status: 'Confirmed', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
    { id: 16, name: 'Sithara', email: 'sithara@example.com', status: 'Cancelled', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
   
    { id: 18, name: 'Naveeni', email: 'naveeni@example.com', status: 'Confirmed', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
   
    { id: 20, name: 'Dilhara', email: 'dilhara@example.com', status: 'Pending', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40' },
];

const Attendees = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAttendees = attendees.filter((attendee) =>
        attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Attendees List</h1>
            <input 
                type="text" 
                placeholder="Search attendees..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <table>
                <thead>
                    <tr>
                        <th>Attendee</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAttendees.map((attendee) => (
                        <tr key={attendee.id}>
                            <td>
                                <img
                                    src={attendee.image}
                                    alt={`${attendee.name}'s photo`}
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/40?text=No+Image';
                                    }}
                                    style={{ borderRadius: '50%', marginRight: '10px' }}
                                />
                                {attendee.name}
                            </td>
                            <td>{attendee.email}</td>
                            <td>{attendee.status}</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Attendees;
