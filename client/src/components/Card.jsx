
function Card(PropsType) {
  return (
    <div className="everything-card mt-10 ">
      <div className="everything-card flex flex-wrap p-5 gap-1 mb-1">
        <b className="title">{PropsType.title}</b>
        <div className="everything-card-img mx-auto">
          <img className="everything-card-img" src={PropsType.imgUrl} alt="img" />
        </div>
        <div className="description">
          <p className="description-text leading-7 des">
            {PropsType.description}
          </p>
        </div>
        <div className="info">
          <div className="source-info flex items-center gap-2">
            <span className="font-semibold">Source:</span>
            <a
              href={PropsType.url}
              target="_blank"
              className="link underline break-words source"
            >
              {PropsType.source}
            </a>
          </div>
          <div className="origin flex flex-col">
            <p className="origin-item">
              <span className="font-semibold">Author:</span>
              {PropsType.author}
            </p>
            <p className="origin-item">
              <span className="font-semibold">Published At:</span>
              ({PropsType.publishedAt})
            </p>
          </div>
        </div>
      </div>

      {/* Added the new card content with styles */}
      <div className="flex lg:flex-row">
        <div 
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "
          style={{ backgroundImage: `url(${PropsType.imageUrlLeft})` }}
          title={PropsType.imageLeftTitle}
        ></div>
        <div className="border rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {PropsType.memberIcon && (
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  {PropsType.memberIcon}
                </svg>
              )}
              {PropsType.memberText}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {PropsType.cardTitle}
            </div>
            <p className="text-gray-700 text-base">{PropsType.cardDescription}</p>
          </div>
          <div className="flex items-center">
            {PropsType.authorImage && (
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={PropsType.authorImage}
                alt="Avatar"
              />
            )}
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{PropsType.authorName}</p>
              <p className="text-gray-600">{PropsType.publishedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;