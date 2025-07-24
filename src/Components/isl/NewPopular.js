import React from "react";
import VideoPlaylistGrid from "./VideoPlaylistGrid";

// Sample data with playlist structure
const playlists = [
  {
    name: "Our Prophet Series (Battle of Uhud)",
    videos: [
      {
        title:
          "The 4-Step Approach by Islam to Ban Alcohol - Our Prophet 7 - 169/169",
        speaker: "Sayed Mohammed Baqer al-Qazwini",
        thumbnail: "https://img.youtube.com/vi/B9Y9bJpzPGo/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=B9Y9bJpzPGo",
      },
      {
        title:
          "Aftermath of Uhud 4/4: Banu Nadir Plans To Kill The Prophet - 168/169",
        speaker: "Sayed Mohammed Baqer al-Qazwini",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      {
        title:
          "Aftermath of Uhud 3/4: Tragedy of Raji & Bir Maona - 167/169",
        speaker: "Sayed Mohammed Baqer al-Qazwini",
        thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
      },
      {
        title:
          "Aftermath of Uhud 2/4: Prophet Wants Medina to Mourn Hamza - 166/169",
        speaker: "Sayed Mohammed Baqer al-Qazwini",
        thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
      },
    ],
  },
  {
    name: "Qur'anic Reflections",
    videos: [
      {
        title: "What Happened to Wahshi, the Killer of Hamza?",
        speaker: "Sayed Mohammed Baqer al-Qazwini",
        thumbnail: "https://img.youtube.com/vi/IofN9jMz52I/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=IofN9jMz52I",
      },
      {
        title: "Role of Women in the Battle of Uhud",
        speaker: "Sayed Mohammed Baqer al-Qazwini",
        thumbnail: "https://img.youtube.com/vi/s8QYxmpEJ4Y/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=s8QYxmpEJ4Y",
      },
    ],
  },
];

const NewPopular = () => {
//   return (
    return <VideoPlaylistGrid playlists={playlists} />;
    // <section className="bg-white py-5">
    //   <div className="container">
    //     <h2 className="text-primary text-center mb-5">🎥 New & Popular</h2>

    //     {playlists.map((playlist, idx) => (
    //       <div key={idx} className="mb-5">
    //         <h4 className="text-dark mb-4">{playlist.name}</h4>
    //         <div className="row g-4">
    //           {playlist.videos.map((video, index) => (
    //             <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
    //               <a
    //                 href={video.link}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 className="text-decoration-none"
    //               >
    //                 <div className="card h-100 shadow-sm border-0">
    //                   <div className="position-relative">
    //                     <img
    //                       src={video.thumbnail}
    //                       alt={video.title}
    //                       className="card-img-top"
    //                       style={{ objectFit: "cover", height: "180px" }}
    //                     />
    //                     {/* Optional play icon */}
    //                     <div
    //                       className="position-absolute top-50 start-50 translate-middle"
    //                       style={{ pointerEvents: "none" }}
    //                     >
    //                       <span className="fs-2 text-white">
    //                         ▶
    //                       </span>
    //                     </div>
    //                   </div>
    //                   <div className="card-body">
    //                     <h6 className="card-title fw-bold text-dark">
    //                       {video.title}
    //                     </h6>
    //                     <p className="card-text text-muted small mb-0">
    //                       {video.speaker}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </a>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
//   );
};

export default NewPopular;
