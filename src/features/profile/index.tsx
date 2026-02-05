import { useState, useEffect } from 'react';
import { ProfileForm } from './components';
import { useUserQuery, useUserUpdate } from './hooks';

function Profile() {
    const { data: user, isLoading } = useUserQuery();
    const userMutation = useUserUpdate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        userMutation.mutate({ name, email });
    };

    if (isLoading) {
        return <div className="p-6 text-center">Loading profile...</div>;
    }

    return (
        <ProfileForm
            name={name}
            email={email}
            onNameChange={setName}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
        />
    );
}

export default Profile;