import React, { FormEventHandler, useEffect, useState } from 'react';
import createNewPost from '../../utils/API/createNewPost';
import { auth } from '../../utils/Firebase/Init';

function CreatePostModal() {
  const [postMessage, setPostMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (!modalOpen) {
      setPostMessage('');
    }

    if (postMessage === '') {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [modalOpen, postMessage]);

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (postMessage === '') return;

    createNewPost({
      name: auth.currentUser!.displayName!,
      message: postMessage,
    });
    setModalOpen(false);
    setInterval(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="new-post-modal"
        className="modal-toggle"
        checked={modalOpen}
        onChange={(e) => setModalOpen(e.target.checked)}
      />
      <label htmlFor="new-post-modal" className="cursor-pointer modal">
        <label className="relative modal-box" htmlFor="">
          <label
            htmlFor="new-post-modal"
            className="absolute text-black bg-transparent border-transparent btn btn-sm btn-circle hover:border-transparent hover:bg-gray-200 right-5 top-5"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold text-left">Create a new post</h3>
          <div className="mt-3 mb-3 divider" />
          <form onSubmit={submit}>
            <textarea
              className="w-full max-w-md max-h-md textarea-md textarea-bordered textarea"
              value={postMessage}
              onChange={(e) => setPostMessage(e.target.value)}
              placeholder="What do you want to tell the world?"
            />
            <div className="flex flex-row-reverse mt-2 mb-0 mr-1">
              <button
                type="submit"
                disabled={submitDisabled}
                className="flex px-10 text-white justify-self-end btn btn-primary btn-md hover:text-white"
              >
                Post
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
}

export default CreatePostModal;
