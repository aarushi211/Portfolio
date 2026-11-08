
type VideoProps = {
  url?: string;
  label?: string;
};

function getYouTubeEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();

    let videoId: string | null = null;

    if (
      hostname === "youtube.com" ||
      hostname === "www.youtube.com" ||
      hostname === "m.youtube.com"
    ) {
      if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/")[2];
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/")[2];
      } else {
        videoId = parsed.searchParams.get("v");
      }
    } else if (
      hostname === "youtu.be" ||
      hostname === "www.youtu.be"
    ) {
      videoId = parsed.pathname.split("/")[1];
    }

    if (videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  } catch {
    return url;
  }
}

export default function Video({
  url,
  label = "Project video",
}: VideoProps) {
  if (!url) {
    return (
      <div className="video-placeholder">
        <p>Video coming soon.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        overflow: "hidden",
        borderRadius: 14,
      }}
    >
      <iframe
        src={getYouTubeEmbedUrl(url)}
        title={label}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
