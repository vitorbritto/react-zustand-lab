import { FormEvent } from 'react'

import useUserStore from '../../stores/user';

export default function UserForm() {
  const addUser = useUserStore(state => state.addUser);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = (e.target as any).name.value;
    const email = (e.target as any).email.value;

    addUser({
      name,
      email,
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mt-3 form-group">
          <label className="form-label">Name</label>
          <input className='form-control' type="text" name="name" placeholder="Name" />
        </div>
        <div className="mt-3 form-group">
          <label className="form-label">Email</label>
          <input className="form-control" type="email" name="email" placeholder="Email" />
        </div>
        <button className="btn btn-success w-100 mt-3" type="submit">Create User</button>
      </form>
    </div>
  )
}
