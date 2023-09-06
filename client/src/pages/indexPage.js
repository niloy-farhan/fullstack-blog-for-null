import React from 'react'; // Import React

import Post from '../post'; // Import the Post component

export default function IndexPage() { // Corrected component name to start with a capital letter
    return (
        <div>
            <Post />
            <Post />
            <Post />
        </div>
    );
}