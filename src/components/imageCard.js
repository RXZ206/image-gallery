import React from "react";

export default function ImageCard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img className="w-full" alt="" src={image.webformatURL} />
      <div className="px-6 py-4">
        <h2 className="text-purple-600 mb-lg font-bold">
          Photo by {image.user}
        </h2>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
