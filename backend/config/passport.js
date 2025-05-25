import passport from "passport";
import Strategy from "passport-google-oauth20";
import authService from "../services/authService.js";

const GoogleStrategy = Strategy.Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/v0/auth/google/callback",
            passReqToCallback: true, // If you need access to the request object
        },
        authService.googleOAuthCallback
    )
);

// Serialize/deserialize user
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

export default passport;
