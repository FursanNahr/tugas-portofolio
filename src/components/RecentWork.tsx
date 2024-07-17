import { useState, useEffect } from 'react';
import arrowRight from '../assets/arrow-right-line.svg';
import addBox from '../assets/add-box-fill.svg';
import editIcon from '../assets/pencil-fill.svg';
import deleteIcon from '../assets/delete-bin-5-fill.svg';
import RecentWorkForm, { RecentWorkFormData } from './RecentWorkForm';

interface RecentWork {
  id: number;
  title: string;
  description: string;
  image_url: string;
  date: string;
}

function RecentWork() {
  const [recentWorks, setRecentWorks] = useState<RecentWork[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingWork, setEditingWork] = useState<RecentWork | null>(null);

  useEffect(() => {
    fetchRecentWorks();
  }, []);

  const fetchRecentWorks = () => {
    fetch('http://localhost:3000/get-recent_works')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setRecentWorks(data.data);
        } else {
          console.error('Failed to fetch recent works:', data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      fetch('http://localhost:3000/delete-recent_works', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setRecentWorks(recentWorks.filter(work => work.id !== id));
          } else {
            console.error('Failed to delete recent work:', data.message);
          }
        })
        .catch(error => console.error('Error:', error));
    }
  };

  const handleSubmit = (formData: RecentWorkFormData) => {
    const url = formData.id !== undefined
      ? 'http://localhost:3000/update-recent_works'
      : 'http://localhost:3000/store-recent_works';
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          fetchRecentWorks();
          setIsFormOpen(false);
          setEditingWork(null);
        } else {
          console.error('Failed to save recent work:', data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleEdit = (work: RecentWork) => {
    setEditingWork(work);
    setIsFormOpen(true);
  };

  return (
    <div className="max-w-[1110px] mx-auto sm-desktop:max-w-[728px]">
      <h1 className="text-center text-2xl font-semibold">RECENT WORKS</h1>
      <div className="grid grid-cols-2 pt-20 gap-10 sm-desktop:gap-6 sm-desktop:pt-10 md:grid-cols-1 md:max-w-[350px] md:mx-auto 2sm:max-w-[90%]">
        {recentWorks.map(work => (
          <div className="flex flex-col gap-2 2sm:w-full">
            <div className="flex gap-2">
              <div className="h-9 w-9 rounded-full bg-BgContainer flex items-center justify-center hover:bg-[#3d53c1] duration-300" onClick={() => handleEdit(work)}>
                <img className="h-4 w-4" src={editIcon} alt="" />
              </div>
              <div className="h-9 w-9 rounded-full bg-BgContainer flex items-center justify-center hover:bg-[#3d53c1] duration-300" onClick={() => handleDelete(work.id)}>
                <img className="h-4 w-4" src={deleteIcon} alt="" />
              </div>
            </div>
            <div className="bg-bgHover h-full 2sm:w-full" key={work.id}>
              <a className="bg-BgContainer h-full px-12 pb-8 pt-12 grid gap-3 relative transition-transform hover:translate-y-[-5px] group sm-desktop:px-6 sm-desktop:pb-6 sm-desktop:pt-8 ">
                <h3 className="text-xl font-semibold sm-desktop:text-[16px]">{work.title}</h3>
                <div>
                  <p className="text-gray-300 text-[14px]">{work.date}</p>
                  <p className="text-gray-300 text-[14px] pb-2">{work.description}</p>
                </div>
                <img className="h-[250px] w-full object-cover" src={new URL(`../assets/${work.image_url}`, import.meta.url).href} alt={work.image_url} />
                <img src={arrowRight} className="h-8 w-8 absolute right-[3rem] top-[1.5rem] transform transition-transform duration-300 group-hover:translate-x-2 sm-desktop:h-6 sm-desktop:w-6 sm-desktop:right-9 sm-desktop:top-[2rem]" alt="" />
              </a>
            </div>
          </div>
        ))}
        <div
          className="bg-BgContainer w-full h-[432px] flex justify-center self-end items-center hover:bg-[#162155] duration-300 cursor-pointer sm-desktop:h-[408px]"
          onClick={() => setIsFormOpen(true)}
        >
          <img src={addBox} className="h-10 w-10" alt="" />
        </div>
      </div>
      {isFormOpen && (
        <RecentWorkForm
          onClose={() => {
            setIsFormOpen(false);
            setEditingWork(null);
          }}
          onSubmit={handleSubmit}
          initialData={editingWork || undefined}
        />
      )}
    </div>
  );
}

export default RecentWork;