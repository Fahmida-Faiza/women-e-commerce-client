import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import useCart from "../hooks/useCart";





const Contact = () => {

    const { user } = useContext(AuthContext);
    console.log(user)

    // 
    const [, refetch] = useCart()
    // 

    const handlecontact = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const message = form.message.value;
        console.log(email, name, message);
        ///////////////////////
        // database called
        const contactItem = { email, name, message };
        //  /////////
        axios.post('https://women-e-commerce-server.vercel.app/contact', contactItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Message Send Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch cart to update the cart items count
                    refetch();
                }

            })
    }



















    return (
        <>
            <form onSubmit={handlecontact} >
                <div className=" bg-fuchsia-50 text-center my-12">
                    <h3 className="font-medium text-3xl uppercase  py-5 "> contact page</h3>
                    <div className="flex justify-center">
                        <div className="w-3/4 lg:w-2/4">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Full Name</span>
                                </div>
                                <input type="text"



                                    name="name"
                                    // defaultValue={user?.displayName}
                                    required

                                    placeholder="Type here Full Name"
                                    className="input input-bordered w-full" />


                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="email"

                                    name="email"
                                    // defaultValue={user.email}

                                    required

                                    placeholder="Type here your email"
                                    className="input input-bordered w-full" />

                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Message</span>
                                </div>
                                <textarea className="textarea textarea-info textarea-lg "

                                    name="message"
                                    required

                                    placeholder="Message Us"></textarea>

                            </label>

                        </div>
                    </div>
                    <button className="btn btn-secondary w-2/4 my-5">Submit</button>
                </div>
            </form>
        </>
    );
};

export default Contact;