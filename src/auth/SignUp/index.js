import React from 'react';

export const SignUp = () => {
  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input type='text' name='' id='' />
        </div>
        <div>
          <label>Full name</label>
          <input type='text' name='' id='' />
        </div>
        <div>
          <label>Email</label>
          <input type='email' name='' id='' />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='' id='' />
        </div>
        <div>
          <label>Avatar</label>
          <input type='file' />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};
