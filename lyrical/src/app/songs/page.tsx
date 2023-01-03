import getSongMetadata from "../../components/getSongMetadata";
import SongPreview from "../../components/SongPreview";

const SongDir = () => {
  const songMetadata = getSongMetadata();
  const songPreviews = songMetadata.map((song) => (
    <SongPreview key={song.slug} {...song} />
  ));

  return (
    <div>
      <h2>Songs:</h2>
      <div>{songPreviews}</div>
    </div>
  );
};

export default SongDir;
