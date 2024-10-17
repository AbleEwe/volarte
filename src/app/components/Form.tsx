"use client";

import React, { useState } from 'react';

export const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        celular: '',
        tema: '',
        mensaje: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="mx-auto p-14 bg-[#fff]">
            <h2 className='text-center text-[#3596BF] font-semibold text-3xl mb-2'>Contáctanos</h2>
            <h1 className='text-center font-bold mb-10 text-4xl'>Envianos un mensaje</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className='flex flex-col md:flex-row items-center w-full gap-6'>
                    <div className='w-full md:w-1/2'>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                            Nombre*
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center w-full gap-6'>
                    <div className='w-full md:w-1/2'>
                        <label htmlFor="celular" className="block text-sm font-medium text-gray-700">
                            Celular (opcional)
                        </label>
                        <input
                            type="tel"
                            id="celular"
                            name="celular"
                            value={formData.celular}
                            onChange={handleChange}
                            className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <label htmlFor="tema" className="block text-sm font-medium text-gray-700">
                            Tema (opcional)
                        </label>
                        <input
                            type="text"
                            id="tema"
                            name="tema"
                            value={formData.tema}
                            onChange={handleChange}
                            className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                        Mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className='flex justify-end'>
                    <button
                        type="submit"
                        className="bg-[#3399cc] text-white py-2 px-4 rounded-2xl hover:bg-[#2e8ab8] transition duration-300 w-[170px] transform hover:scale-105"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};