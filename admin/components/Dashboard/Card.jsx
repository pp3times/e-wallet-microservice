const Card = ({ title, value }) => {
    return (
        <div className="shadow rounded p-4 bg-white">
            <h1 className="text-sm m-0">{title}</h1>
            <p className="m-0 text-2xl">{value}</p>
        </div>
    );
}

export default Card;