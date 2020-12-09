// React
import React, { Component } from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Components
import PlaylistCard from "../components/PlaylistCard";

class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = { playlists: [] };
  }

  componentDidMount() {
    const playlists = [
      {
        playlistName: "Romance",
        playlistImageSrc: "/images/romance-playlist-card.jpg",
        playlistVideosUrls: [
          "https://www.youtube.com/watch?v=rXPfovXw2tw", // Brian McKnight - Back At One
          "https://www.youtube.com/watch?v=zDKO6XYXioc", // Boyz II Men - End Of The Road
          "https://www.youtube.com/watch?v=d7cVLE4SaN0", // Bryson Tiller - Don't
        ],
      },
      {
        playlistName: "Passion",
        playlistImageSrc: "/images/passion-playlist-card.jpg",
        playlistVideosUrls: [
          "https://www.youtube.com/watch?v=hglD0HxshhM", // Ta-ku feat. Atu - Long Time No See (Ekali Remix)
          "https://www.youtube.com/watch?v=5lbiB5WNEpU", // Atu - Missing You (ft. Dpat)
          "https://www.youtube.com/watch?v=slo8YLzQFgY", // DOJO! - CONJURE (FEAT. FLOYD)
        ],
      },
      {
        playlistName: "Love",
        playlistImageSrc: "/images/love-playlist-card.jpg",
        playlistVideosUrls: [
          "https://www.youtube.com/watch?v=IxszlJppRQI", // Ne-Yo - So Sick
          "https://www.youtube.com/watch?v=pAyKJAtDNCw", // Michael Jackson - You Are Not Alone
          "https://www.youtube.com/watch?v=uQFVqltOXRg", // Daniel Caesar - Get You ft. Kali Uchis
        ],
      },
    ];
    playlists.map((playlist) => {
      this.youtubePlaylistGenerator(playlist);
    });
  }

  extractYoutubeVideoID = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
      return match[7];
    } else {
      console.error("Could not extract video ID.");
    }
  };

  /**
   * Another alternative that will extract the video ID
   * as well as the playlist ID from YouTube URLS
   */
  extractYoutubeVideoIDBis = () => {
    var id = url.match("v=([a-zA-Z0-9_-]+)&?")[1];
    var list = url.match("list=([a-zA-Z0-9-_]+)&?");
    list = list ? list[1] : "";
  };

  youtubePlaylistGenerator = (playlist) => {
    const { playlistName, playlistImageSrc, playlistVideosUrls } = playlist;
    let youtubePlaylistUrl = "https://www.youtube.com/watch_videos?video_ids=";
    playlistVideosUrls.map((video) => {
      youtubePlaylistUrl += this.extractYoutubeVideoID(video) + ",";
    });
    const playlistResult = {
      playlistName,
      playlistImageSrc,
      youtubePlaylistUrl,
    };
    this.setState((state) => ({
      playlists: [...state.playlists, playlistResult],
    }));
  };

  render() {
    const playlists = this.state.playlists;
    return (
      <React.Fragment>
        <Typography variant="h1">Playlists</Typography>
        <Grid container spacing={3}>
          {playlists.map((playlist, index) => {
            return (
              <Grid key={index} item xs={12} md={6}>
                <PlaylistCard
                  name={playlist.playlistName}
                  img={playlist.playlistImageSrc}
                  link={playlist.youtubePlaylistUrl}
                />
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Playlists;
