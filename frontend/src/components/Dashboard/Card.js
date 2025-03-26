const Card = ({ title, content }) => {
    return (
      <div className="bg-white p-5 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{content}</p>
      </div>
    );
  };
  
  export default Card;
  