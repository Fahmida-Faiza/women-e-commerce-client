
const Contact = () => {
    return (
        <div className=" bg-fuchsia-50 text-center my-12">
            <h3 className="font-medium text-3xl uppercase  py-5 "> contact page</h3>
          <div className="flex justify-center">
            <div className="w-3/4 lg:w-2/4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Full Name</span>
                        </div>
                        <input type="text" placeholder="Type here Full Name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" placeholder="Type here your email" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Message</span>
                        </div>
                        <textarea className="textarea textarea-info textarea-lg " placeholder="Message Us"></textarea>
                    </label>
                    
            </div>
          </div>
            <button className="btn btn-secondary w-2/4 my-5">Submit</button>
        </div>
    );
};

export default Contact;