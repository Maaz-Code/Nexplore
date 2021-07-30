import React from 'react'
import Footer from './Footer';
import { 
    ClerkProvider, 
    SignedIn, 
    SignedOut, 
    UserButton, 
    useUser,
    useClerk
  } from '@clerk/clerk-react';
  
  // Retrieve Clerk settings from the environment
  const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

  const SignOutButton = () => {
    const { signOut } = useClerk();
    return (
      <button className="btn btn-dark" onClick={() => { signOut() }}>
        Sign out
      </button>
    )
  }

  const SignInButton = () => {
    const { openSignIn } = useClerk();
    return (
      <button className="btn btn-dark" onClick={() => { openSignIn({}) }}>
        Sign in
      </button>
    )
  }

  const Auth = () => {
    return (
      <>
      <ClerkProvider frontendApi={clerkFrontendApi}>
        <SignedOut>
          <div className="p-5 mt-5 shadow container">
            <div className="row">
              <div className="p-3 col-lg-8">
                <h5>You are signed out.</h5>
              </div>
              <div className="p-3 col-lg-4">
                <SignInButton/>
              </div>
            </div>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="p-5 mt-5 shadow container">
            <div className="row">
              <div className="p-3 col-lg-3">
                <UserButton />
              </div>
              <div className="p-3 col-lg-6">
                <Greeting />
              </div>
              <div className="p-3 col-lg-3">
                <SignOutButton/>
              </div>
            </div>
          </div>
        </SignedIn>
      </ClerkProvider>
      <Footer />
      </>
    )
  }
  
  const Greeting = () => {
    const { firstName } = useUser();
    return (
      <div>
        <h3>
          Hello, {firstName}!
        </h3>
        <h5>
          You can visit your profile to see more details.
        </h5>
      </div>
    );
  }

  export default Auth;