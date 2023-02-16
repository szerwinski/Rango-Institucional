import React from "react";
import PropTypes from "prop-types";
import "./youtube.scss";

export default function YoutubeEmbed({ embedId }) {
    return (
        <div className="responsive-iframe-container">
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player">
          </iframe>
      </div>
    );
  }

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
