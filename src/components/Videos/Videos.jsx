import { useState } from "react";
import "./videos.css";
import { videos } from "./videosData";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="videos-section" id="videos">

      <div className="videos-header">
        <span className="videos-badge">🎬 Vídeos Divertidos</span>
        <h2>Aprenda assistindo</h2>
        <p>
          Escolha um vídeo e descubra dicas rápidas para curtir a
          internet com mais segurança e confiança.
        </p>
      </div>

      <div className="videos-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onOpen={setSelectedVideo} />
        ))}
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />

    </section>
  );
}
