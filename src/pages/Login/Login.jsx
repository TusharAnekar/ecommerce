export function Login () {

    function loginWithTestUser () {
        
    }

    return(
        <>
        <h2>Sign In</h2>
        <label htmlFor="">
            Email Address
            <input type="email" />
        </label>

        <label htmlFor="">
            Password
            <input type="password" />
        </label>

        <button onClick={loginWithTestUser}>Login with test user</button>
        </>
    )
}