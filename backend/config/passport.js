const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // Use the client ID from .env
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Use the client secret from .env
      callbackURL: '/api/auth/google/callback', // Callback URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // Create a new user if they don't exist
          user = new User({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
          });
          await user.save();
        }

        done(null, user); // Return the user
      } catch (err) {
        done(err, null); // Handle errors
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize user by ID
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user); // Deserialize user by ID
  } catch (err) {
    done(err, null); // Handle errors
  }
});