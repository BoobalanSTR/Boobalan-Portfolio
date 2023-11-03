import React from 'react'

const Details = () => {
    const projectDetails = [
        { title: "Role", content: 'As the Frontend Developer, I was responsible for crafting the user interface and ensuring a smooth and engaging experience for all types of users.' },
        { title: 'Technologies Used', content: ['Frontend: Next.js', 'Backend: Node.js', 'Database: MongoDB', 'Type Checking: TypeScript', 'State Management: Redux Toolkit'] },
        { title: 'Overview', content: 'Boatstar is a vacation rental platform designed to emulate the functionality of Airbnb, focusing specifically on boat rentals. Users can browse and book boats for their vacation getaways.' },
        { title: 'Features', content: ['Detailed boat listings with descriptions, amenities, and location information.', 'User authentication for three types of users: guest, host, and admin.', 'Chat application for communication between users.', 'Dynamic comment section for users to leave reviews.'] },
        { title: 'Challenges', content: ['Integrating a chat application using a normal API proved to be a challenging task, requiring careful consideration of data flow and real-time updates.', 'Implementing a dynamic comment section required thoughtful state management and updating mechanisms.'] },
        { title: 'TypeScript Implementation', content: 'Describe how TypeScript was utilized for type safety and improved development experience, specifically within the Next.js and Redux Toolkit ecosystem.' },
        { title: 'Lessons Learned', content: 'Reflect on the valuable lessons learned during the project, including in-depth understanding of Next.js server-side rendering, effective Redux state management using Redux Toolkit, and proficient use of Tailwind CSS for styling.' },
        { title: 'Gained', content: ['Proficiency in internationalization with Next.js (next-i18n).', 'Deployment process through Vercel, including version control with Git and GitHub.'] }
    ];
    return (
        <div className='grid border-[#717171] bg-[#dddddd] lg:grid-cols-2 mt-10 py-5 px-3 sm:max-w-[83%] rounded-xl mx-auto gap-6'>
            {projectDetails.map((section, index) => (
                <div
                    key={index}
                    className="border rounded-md border-[#dddddd] bg-[#fff] p-2 shadow-md hover:bg-[#717171] transition-all"
                >
                    <p className='font-semibold py-5  text-[20px] text-black hover:text-white'>
                        {section.title}
                    </p>
                    {Array.isArray(section.content) ? (
                        <ol className='list-disc pl-4'>
                            {section.content.map((item, i) => (
                                <li className='py-2' key={i}>{item}</li>
                            ))}
                        </ol>
                    ) : (
                        <p>{section.content}</p>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Details