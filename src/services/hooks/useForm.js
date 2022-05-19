import React, { useState } from 'react'

const useForm = (formState, fn = null) => {
    const [form, setForm] = useState(formState);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (fn) {
            fn();
        }

    };
    return [form, handleChange, handleSubmit]
}

export default useForm