import React from 'react';

export const AddPost = () => {
  const handleChange = () => {};

  const handlePhotoChange = () => {};

  const handleAddPost = () => {};
  return (
    <div>
      <form>
        <div>
          <label htmlFor='description'>Description</label>
          <input type='text' name='description' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='photo'>Photo</label>
          <input type='file' name='photo' onChange={handlePhotoChange} />
        </div>
        <div>
          <button type='button' onClick={handleAddPost}>
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};
