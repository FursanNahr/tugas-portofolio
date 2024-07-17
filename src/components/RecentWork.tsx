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
    fetch('http://localhost:3000/store-recent_works', {
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
        } else {
          console.error('Failed to add recent work:', data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="max-w-[1150px] mx-auto">
      <h1 className="text-center text-2xl font-semibold">RECENT WORKS</h1>
      <div className="grid grid-cols-2 pt-20 gap-10">
        {recentWorks.map(work => (
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="h-9 w-9 rounded-full bg-BgContainer flex items-center justify-center hover:bg-[#3d53c1] duration-300">
                <img className="h-4 w-4" src={editIcon} alt="" />
              </div>
              <div className="h-9 w-9 rounded-full bg-BgContainer flex items-center justify-center hover:bg-[#3d53c1] duration-300" onClick={() => handleDelete(work.id)}>
                <img className="h-4 w-4" src={deleteIcon} alt="" />
              </div>
            </div>
            <div className="bg-bgHover h-full" key={work.id}>
              <a className="bg-BgContainer h-full px-14 py-8 grid gap-4 relative transition-transform hover:translate-y-[-5px] group">
                <h3 className="text-xl font-semibold">{work.title}</h3>
                <div>
                  <p>{work.date}</p>
                  <p>{work.description}</p>
                </div>
                <img src={new URL(`../assets/${work.image_url}`, import.meta.url).href} alt={work.image_url} />
                <img src={arrowRight} className="h-8 w-8 absolute right-[3rem] top-[1.5rem] transform transition-transform duration-300 group-hover:translate-x-2" alt="" />
              </a>
            </div>
          </div>
        ))}
        <div
          className="bg-BgContainer w-full h-[406px] flex justify-center items-center hover:bg-[#162155] duration-300 cursor-pointer"
          onClick={() => setIsFormOpen(true)}
        >
          <img src={addBox} className="h-10 w-10" alt="" />
        </div>
      </div>
      {isFormOpen && (
        <RecentWorkForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default RecentWork;