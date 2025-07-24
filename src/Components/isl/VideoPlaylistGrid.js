import React from "react";

const VideoPlaylistGrid = ({ playlists = [] }) => {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <h2 className="text-primary text-center mb-5">🎥 New & Popular</h2>

        {playlists.map((playlist, idx) => (
          <div key={idx} className="mb-5">
            <h4 className="text-dark mb-4">{playlist.name}</h4>
            <div className="row g-4">
              {playlist.videos.map((video, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="card h-100 shadow-sm border-0">
                      <div className="position-relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="card-img-top"
                          style={{
                            objectFit: "cover",
                            height: "180px",
                            borderTopLeftRadius: "0.5rem",
                            borderTopRightRadius: "0.5rem",
                          }}
                        />
                        <div
                          className="position-absolute top-50 start-50 translate-middle"
                          style={{ pointerEvents: "none" }}
                        >
                          <span className="fs-2 text-white">▶</span>
                        </div>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title fw-bold text-dark">
                          {video.title}
                        </h6>
                        <p className="card-text text-muted small mb-0">
                          {video.speaker}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoPlaylistGrid;
