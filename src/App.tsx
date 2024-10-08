import AuthLayout from "./_auth/authLayout";
import SignInForm from "./_auth/forms/signinForm";
import SignUpForm from "./_auth/forms/signupForm";
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved} from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import EditProfile from "./_root/pages/EditProfile";


const App = () => {
  return (
    <main className="flex h-screen w-full">
      <Routes>

        {/* private routes */}
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* public routes */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route  path="/explore" element = {<Explore />} />
          <Route  path="/saved" element = {<Saved />} />
          <Route  path="/all-users" element = {<AllUsers />} />
          <Route  path="/create-post" element = {<CreatePost />} />
          <Route  path="/update-post/:id" element = {<EditPost />} />
          <Route  path="/post/:id" element = {<PostDetails />} />
          <Route  path="/profile/:id/*" element = {<Profile />} />
          <Route  path="/edit-profile/:id/*" element = {<EditProfile />} />
        </Route>
        
      </Routes>
      
      <Toaster />
    </main>
  );
};

export default App;
