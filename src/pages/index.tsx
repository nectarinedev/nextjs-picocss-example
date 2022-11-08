export default function Home() {
  return (
    <div>
      <main>
        <article>
          <h1>Sign In</h1>
          <form>
            <input
              type='text'
              name='login'
              placeholder='Login'
              aria-label='Login'
              autoComplete='username'
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              aria-label='Password'
              autoComplete='current-password'
              required
            />
            <fieldset>
              <label htmlFor='remember'>
                <input
                  type='checkbox'
                  role='switch'
                  id='remember'
                  name='remember'
                />
                Remember me
              </label>
            </fieldset>
            <button type='submit' className='contrast'>
              Login
            </button>
          </form>
        </article>
      </main>
    </div>
  );
}
