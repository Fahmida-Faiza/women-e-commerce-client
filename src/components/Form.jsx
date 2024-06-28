

import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import useCart from "../hooks/useCart";




const Form = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    // 
    const [, refetch] = useCart()
    // 

    const handleform = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const bNumder = form.bNumder.value;
        const bday = form.bday.value;
        const gender = form.gender.value;
        const nationality = form.nationality.value;
        const religious = form.religious.value;
        const classes = form.classes.value;
        const number = form.number.value;
        const fName = form.fName.value;
        const mName = form.mName.value;
        const address = form.address.value;
        console.log(name, bNumder, bday, gender, nationality, religious, classes, number, fName, mName, address)

        ///////////////////////
        // database called
        const formItem = { name, bNumder, bday, gender, nationality, religious, classes, number, fName, mName, address };
        //  /////////vercel add korar agey
        // axios.post('http://localhost:5000/form', formItem)
        /////////
        axios.post('https://women-e-commerce-server.vercel.app/form', formItem)
        
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
            <form onSubmit={handleform} >
                <div className=" bg-red-200 text-center my-12">
                    <h3 className="font-medium text-3xl uppercase  py-5 "> Form Fill-Up Page</h3>
                    <div className="flex justify-center">
                        <div className="w-3/4 lg:w-2/3 ">

                            <div className="grid grid-cols-2 justify-center gap-5">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Full Name</span>
                                    </div>
                                    <input type="text"
                                        name="name"
                                        // defaultValue={user?.displayName}
                                        required
                                        placeholder="Full Name"
                                        className="input input-bordered w-full" />
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Birth Registration</span>
                                    </div>
                                    <input type="number"
                                        name="bNumder"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Birth Registration Number"
                                        className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Date of birth</span>
                                    </div>
                                    <input type="date"
                                        name="bday"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Date of Birth"
                                        className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Gender</span>
                                    </div>
                                    <select className="select select-bordered w-full" name="gender">
                                        <option disabled selected>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Nationality</span>
                                    </div>
                                    <input type="text"
                                        name="nationality"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Nationality"
                                        className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Religious</span>
                                    </div>
                                   
                                    <select className="select select-bordered w-full" name="religious">
                                        <option disabled selected>Religious</option>
                                        <option>Islam</option>
                                        <option>Hindu</option>
                                        <option>Budist</option>
                                        <option>Christain</option>
                                        <option>Others</option>
                                    </select>
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Class</span>
                                    </div>
                                    <input type="number"
                                        name="classes"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Class"
                                        className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Mobile Number</span>
                                    </div>
                                    <input type="number"
                                        name="number"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Father's Name</span>
                                    </div>
                                    <input type="text"
                                        name="fName"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Father's Name"
                                        className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Mother's Name</span>
                                    </div>
                                    <input type="text"
                                        name="mName"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Mother's Name"
                                        className="input input-bordered w-full" />
                                </label>
                                
                            </div>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Address</span>
                                </div>
                                <textarea className="textarea textarea-info textarea-lg"
                                    name="address"
                                    required
                                    placeholder="Address"></textarea>
                            </label>

                        </div>
                    </div>
                    <button className="btn btn-success text-white w-2/3 my-5">Submit</button>
                </div>
            </form>
        </>
    );
};

export default Form;