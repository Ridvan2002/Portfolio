import React, { useState, useRef } from "react";
import './styles/Contact.css';
import emailjs from '@emailjs/browser';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        attachments: [] 
    });

    const fileInputRef = useRef(null);

    const s3Client = new S3Client({
        region: 'us-east-2',
        credentials: {
            accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
            secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files); 
        setFormData({
            ...formData,
            attachments: files 
        });
    };

    const uploadFileToS3 = async (file) => {
        const params = {
            Bucket: 'portfolioattachments',
            Key: `${Date.now()}_${file.name}`,
            Body: file,
            ContentType: file.type
        };

        try {
            const command = new PutObjectCommand(params);
            const data = await s3Client.send(command);
            const fileUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
            console.log(`File uploaded successfully at ${fileUrl}`);
            return fileUrl;
        } catch (err) {
            console.error('Error uploading file to S3:', err);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const attachmentUrls = [];

        for (const file of formData.attachments) {
            const url = await uploadFileToS3(file);
            if (url) {
                attachmentUrls.push(url);
            }
        }

        emailjs.send('service_fqhc8lx', 'template_opotaek', {
            from_name: `${formData.firstName} ${formData.lastName}`, 
            from_email: formData.email,
            message: formData.message,
            attachment_urls: attachmentUrls.length > 0 ? attachmentUrls.join(', ') : 'No attachments' 
        }, 'nlh6iXB4vyX0ZXjDG')
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.error('Failed to send email.', error);
            alert("Failed to send the message. Please try again later.");
        });

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            attachments: []
        });

        // Clear the file input field
        if (fileInputRef.current) {
            fileInputRef.current.value = '';  
        }
    };

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-textarea"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="attachment">Attach Files:</label>
                    <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        multiple 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
