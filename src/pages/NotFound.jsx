import React from 'react';
import Button from '../Components/ui/Button';

const NotFound = () => (
    <div className="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Button to="/" variant="primary" size="lg">Back to Home</Button>
    </div>
);

export default NotFound;
