import React, { useState } from "react";
import './index.css';

const CMS = () => {
    const [content, setContent] = useState('');
    const [isEditable, setIsEditable] = useState(false);

    // Function to handle POST request
    const postData = async () => {
        try {
            const response = await fetch('http://localhost:8080/heading', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    heading: content, // Send the content as 'heading'
                }),
            });

            // Check if the response is successful
            if (response.ok) {
                // If the response is a plain text (not JSON), use response.text()
                const data = await response.text(); // Get the response as text
                console.log(data);  // Log the response
                alert('Content saved successfully!');
            } else {
                alert('Failed to save content. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save content. Please try again.');
        }
    };

    return (
        <div>
            <h1 className="cms-title">Content Management System</h1>
            <textarea
                className="cms-textarea"
                rows="10"
                cols="50"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={!isEditable}
            />
            <div className="cms-buttons">
                <button
                    className="edit-button"
                    onClick={() => setIsEditable(true)}
                >
                    Edit
                </button>
                <button
                    className="save-button"
                    onClick={() => {
                        postData(); // Call the postData function to save the content
                        setIsEditable(false);
                    }}
                    disabled={!isEditable}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default CMS;
