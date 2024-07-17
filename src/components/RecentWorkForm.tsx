import React, { useState, useEffect } from 'react';

interface RecentWorkFormProps {
  onClose: () => void;
  onSubmit: (formData: RecentWorkFormData) => void;
  initialData?: RecentWorkFormData;
}

export interface RecentWorkFormData {
  id?: number;
  title: string;
  description: string;
  image_url: string;
  date: string;
}

const RecentWorkForm: React.FC<RecentWorkFormProps> = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState<RecentWorkFormData>({
    title: '',
    description: '',
    image_url: '',
    date: '',
  });

  useEffect(() => {
    if (initialData) {
      const [day, month, year] = initialData.date.split('/');
      const formattedDate = `20${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      setFormData({
        ...initialData,
        date: formattedDate
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ubah format tanggal kembali ke DD/MM/YY sebelum mengirim ke server
    const [year, month, day] = formData.date.split('-');
    const formattedDate = `${day}/${month}/${year.slice(-2)}`;
    onSubmit({...formData, date: formattedDate});
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#181e39] p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">{initialData ? 'Edit' : 'Add'} Recent Work</h2>
        <form onSubmit={handleSubmit} className="text-white">
          <div className="mb-4">
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded px-2 py-1 bg-[#2a3463]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded px-2 py-1 bg-[#2a3463]"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Image URL</label>
            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              className="w-full bg-[#2a3463] rounded px-2 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-[#2a3463] rounded px-2 py-1"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-[#FF6F61] rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-[#007BFF] text-white rounded">
              {initialData ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecentWorkForm;