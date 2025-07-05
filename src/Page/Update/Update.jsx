import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const artCraft = useLoaderData()
    // console.log(artCraft)
    const {_id, itme, description, photo, price, rating, time} = artCraft;

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const subcategory = form.subcategory.value;
        const itme = form.itme.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const updateArtCraft = { subcategory, itme, description, photo, price, rating, customization, time, stock }
        console.log('Update Art&Craft', updateArtCraft);
        fetch(`http://localhost:5000/artcraft/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateArtCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add Update art&Craft',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="my-10">
            <div className="lg:w-[800px] md:w-[450px] w-[350px] mx-auto border-2 rounded-lg shadow-lg">
                <div className="text-center p-2 lg:text-3xl text-base font-semibold my-2">
                    <h2>Update Art And Craft</h2>
                </div>
                <form onSubmit={handleUpdate}>
                    {/* email  */}
                    <div className="mb-3 px-2">
                        <label className="text-base font-semibold">Subcategory Name</label>
                        <div>
                            <select name="subcategory"  id="" className="w-full border-2 p-3">
                                <option value="select">Select Subcategory</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        </div>
                    </div>

                    {/* itme  */}
                    <div className="mb-3 px-3">
                        <label className="text-base font-semibold">Item Name</label>
                        <div>
                            <input type="text" name="itme" defaultValue={itme} placeholder="Enter Your Item Name" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* short description  */}
                    <div className="mb-3 px-3">
                        <label className="text-base font-semibold">Short Description</label>
                        <div>
                            <input type="text" name="description" defaultValue={description} placeholder="Enter Your Description" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* photo  */}
                    <div className="mb-3 px-3">
                        <label className="text-base font-semibold">Photo Url</label>
                        <div>
                            <input type="url" name="photo" defaultValue={photo} placeholder="Enter Your Photo Url" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* price and rating  */}
                    <div className="mb-3 px-3 flex lg:flex-row flex-col justify-between items-center gap-2">
                        <div className="w-full">
                            <label className="text-base font-semibold">Price</label>
                            <div>
                                <input type="text" name="price" defaultValue={price} placeholder="Enter Your Price" id="" className="w-full p-3 border-2" />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="text-base font-semibold">Rating</label>
                            <div>
                                <input type="text" name="rating" defaultValue={rating} placeholder="Enter Your Rating" id="" className="w-full p-3 border-2" />
                            </div>
                        </div>
                    </div>

                    {/* customization and processing  */}
                    <div className="mb-3 px-3 flex lg:flex-row flex-col justify-between items-center gap-2">
                        <div className="w-full">
                            <label className="text-base font-semibold"> Customization</label>
                            <div>
                                <select name="customization" className="w-full border-2 p-3" id="">
                                    <option value="select">Select Customization</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="text-base font-semibold"> Processing Time</label>
                            <div>
                                <input type="text" name="time" defaultValue={time} placeholder="Enter Your Processing Time" id="" className="w-full p-3 border-2" />
                            </div>
                        </div>
                    </div>

                    {/* stockStatus */}
                    <div className="mb-3 px-3 flex lg:flex-row flex-col justify-between items-center gap-2">
                        <div className="w-full">
                            <label className="text-base font-semibold"> Stock Status</label>
                            <div>
                                <select name="stock" className="w-full border-2 p-3" id="">
                                    <option value="select">Select Stock Status</option>
                                    <option value="In stock">In stock</option>
                                    <option value="Made to Order">Made to Order</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* button  */}
                    <div className="my-3 px-3">
                        <button className="btn btn-primary w-full">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;