

const MenuItem = ({item}) => {
    const{image,price,title,description}=item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">{price}</p>

                <div className="card-body flex flex-col items-center ">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button
                            // onClick={() => (handleAddToCart(item))}


                            className="btn btn-primary border-0 mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;