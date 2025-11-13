import React from 'react';
import { useForm } from 'react-hook-form';

export default function BookForm({ initial=null, onCreate, onUpdate, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initial || { title:'', author:'', isbn:'', category:'', copies:1 } });
  const submit = data => {
    if (initial && onUpdate) return onUpdate(initial.id, data);
    if (onCreate) return onCreate(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-3">
      <div>
        <label className="block text-sm">Title</label>
        <input {...register('title', { required: true })} className="w-full p-2 border rounded" />
        {errors.title && <small className="text-red-600">Required</small>}
      </div>
      <div>
        <label className="block text-sm">Author</label>
        <input {...register('author', { required: true })} className="w-full p-2 border rounded" />
      </div>
      <div className="flex gap-2">
        <input {...register('isbn')} placeholder="ISBN" className="p-2 border rounded flex-1" />
        <input type="number" {...register('copies', { valueAsNumber: true })} placeholder="Copies" className="p-2 border rounded w-36" />
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
      </div>
    </form>
  );
}
