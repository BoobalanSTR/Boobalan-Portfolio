"use client"
import React, { useState, forwardRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ContactForm = forwardRef<HTMLDivElement>((props, ref) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error'>('success');

    const handleSnackbarClose: SnackbarProps['onClose'] = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'At least 3 characters')
                .matches(/^[A-Za-z]+$/, 'Only letters are allowed')
                .required('Required'),
            lastName: Yup.string()
                .min(1, 'At least 1 character')
                .matches(/^[A-Za-z]+$/, 'Only letters are allowed')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            subject: Yup.string()
                .min(5, 'At least 5 characters')
                .required('Required'),
            message: Yup.string()
                .min(5, 'At least 5 characters')
                .required('Required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const response = await fetch('https://formspree.io/f/mpzgkbvk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                setSeverity('success');
                setSnackbarMessage('Form submitted successfully!');
                resetForm();
            } else {
                setSeverity('error');
                setSnackbarMessage('Error submitting form. Please try again later.');
            }
            setSnackbarOpen(true);
        }
    });
    const copyToClipboard = (textToCopy: string) => {
        navigator.clipboard.writeText(textToCopy);
    };
    return (
        <div ref={ref} className='w-full grid justify-center////////8 lg:flex items-center'>
            <section className='lg:w-1/2 border my-5 sm:mx-16 px-5 py-10  shadow-lg border-[#dddddd] rounded-md'>
                <p className='text-[#13105] text-[1.875rem] font-semibold py-3 text-center'>Get In Touch</p>
                <form
                    onSubmit={formik.handleSubmit} className="grid justify-center gap-5">
                    <div className='flex flex-wrap  gap-3'> <div>
                        <input
                            className='border-2 border-[#dddddd] rounded-md px-5 py-2'
                            placeholder='Firstname'
                            type="text"
                            id="firstName"
                            name="firstName"
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className='text-xs text-[#ff0000]'>{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                        <div>
                            <input
                                className='border-2 border-[#dddddd] rounded-md px-5 py-2'
                                placeholder='Lastname'
                                type="text"
                                id="lastName"
                                name="lastName"
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className='text-xs text-[#ff0000]'>{formik.errors.lastName}</div>
                            ) : null}
                        </div>
                    </div>
                    <div>
                        <input
                            className='border-2 rounded-md border-[#dddddd] px-5 py-2'
                            placeholder='Email'
                            type="email"
                            id="email"
                            name="email"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-xs text-[#ff0000]'>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <input
                            className='border-2 rounded-md border-[#dddddd] px-5 py-2'
                            placeholder='Subject'
                            type="text"
                            id="subject"
                            name="subject"
                            {...formik.getFieldProps('subject')}
                        />
                        {formik.touched.subject && formik.errors.subject ? (
                            <div className='text-xs text-[#ff0000]'>{formik.errors.subject}</div>
                        ) : null}
                    </div>
                    <div>
                        <textarea
                            className='border-2 w-full rounded-md border-[#dddddd] px-5 py-2'
                            placeholder='Message'
                            id="message"
                            name="message"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                }
                            }}
                            {...formik.getFieldProps('message')}
                        />
                        {formik.touched.message && formik.errors.message ? (
                            <div className='text-xs text-[#ff0000]'>{formik.errors.message}</div>
                        ) : null}
                    </div>
                    <button type="submit" className='px-5 py-3 mx-auto bg-[#fe3e57] rounded-full text-white font-semibold border-2 border-[#dddddd] '>Send Message</button>
                </form>
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity={severity}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </section>
            <section className='lg:w-1/2 grid  gap-7'>
                {[
                    {
                        icon: <img src="/assets/svg/address.svg" className='w-7 h-7' />,
                        content: (
                            <span className='grid gap-2'>
                                <span>12/22,Muthurengan Street, Madurai</span>
                                <span>Tamilnadu</span>
                            </span>
                        ),
                    },
                    {
                        icon: <MailOutlineIcon sx={{ color: "#717171" }} />,
                        content: (
                            <span className='flex flex-wrap gap-4 items-center text-[19px] justify-center'>
                                r.boobalan111@gmail.com
                                <ContentCopyIcon onClick={() => copyToClipboard('r.boobalan111@gmail.com')} style={{ cursor: 'pointer' }} />
                            </span>
                        ),
                    },
                    {
                        icon: <CallIcon sx={{ color: "#717171" }} />,
                        content: (
                            <span className='flex flex-wrap gap-4 items-center text-[19px] justify-center'>
                                +91 7695018927
                                <ContentCopyIcon onClick={() => copyToClipboard('+91 7695018927')} style={{ cursor: 'pointer' }} />
                            </span>
                        ),
                    },
                ].map((item, index) => (
                    <div key={index} className='border mx-auto lg:mx-0 flex justify-center items-center h-[100%] flex-wrap  rounded-md gap-3 shadow-md w-[80%] p-5'>
                        {item.icon}
                        <p className='text-[24px] text-[#131058] font-semibold flex gap-2 items-center text-center'>
                            {item.content}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
})

export default ContactForm;
