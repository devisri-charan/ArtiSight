import React, { useState, useEffect } from 'react';
import LinkCard from './LinkCard';
import axios from 'axios';

const Resources = ({ critique, suggestions }) => {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(false);
<<<<<<< HEAD
    const [fetching, setFetching] = useState(false);
=======
>>>>>>> 6424736ee6c380b6aa4f27093aabf1a36c313766

    useEffect(() => {
        const fetchData = async () => {
            if (!critique || !suggestions || fetching) return;
            setFetching(true);
            setLoading(true);
            try {
                const data = {
                    critique: critique,
                    suggestions: suggestions
                }
<<<<<<< HEAD
                const response = await axios.post('http://127.0.0.1:5000/resources', data);
                setResources(response.data.webResults);
=======
                const response = await axios.post('https://artisight.onrender.com/resources', data);
                setResources(response.data.webResults);
                setLoading(false); // Stop loading after data is fetched
>>>>>>> 6424736ee6c380b6aa4f27093aabf1a36c313766
            } catch (error) {
                console.error('Error fetching resources:', error);
            } finally {
                setLoading(false);
                setFetching(false);
            }
        };

        fetchData();
    }, [critique, suggestions]);

    return (
        <div className="p-8 lg:px-20">
            <div className='px-5 lg:px-10'>
                <h2 className="text-3xl font-bold mb-4 text-dark">Resources</h2>
                {loading ?
                    <div className="flex items-start">
                        <p className='text-dark'>Loading Resources...</p>
                    </div> :
                    resources.length > 0 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {resources.map((resource, index) => (
                            <LinkCard
                                key={index}
                                title={resource.title}
                                thumbnail={resource.thumbnail}
                                link={resource.link}
                            />
                        ))}
                    </div> :
                    <div className="text-dark font-medium text-xl">Sorry, Bob is busy helping other photographers. Try after some time 😉</div>
                }
            </div>
        </div>
    );
};
<<<<<<< HEAD

export default Resources;
=======
export default Resources;
>>>>>>> 6424736ee6c380b6aa4f27093aabf1a36c313766
