import React, { useState } from "react";

function CreatePostModal() {

    const [postMessage, setPostMessage] = useState('');


    const submit = () => {
        
    }


    return (
        <div>
            <input type="checkbox" id="new-post-modal" className="modal-toggle" />
            <label htmlFor="new-post-modal" className="cursor-pointer modal">
                <label className="relative modal-box" htmlFor="">
                    <label htmlFor="new-post-modal" className="absolute text-black bg-transparent border-transparent btn btn-sm btn-circle hover:border-transparent hover:bg-gray-200 right-5 top-5">✕</label>
                    <h3 className="text-xl font-bold text-left">Create a new post</h3>
                    <div className="mt-3 mb-3 divider"></div>
                    <form onSubmit={submit}>
                        <textarea className="w-full max-w-md max-h-md textarea-md textarea-bordered textarea" onChange={(e) => setPostMessage(e.target.value)} placeholder="What do you want to tell the world?"></textarea>
                        <div className="flex flex-row-reverse mt-2 mb-0 mr-1">
                            <a className="flex px-10 text-white justify-self-end btn btn-primary btn-md hover:text-white">Post</a>
                        </div>
                    </form>

                    <h4>{postMessage}</h4>
                </label>
            </label>
        </div>
    );
}

export default CreatePostModal;