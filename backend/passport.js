import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import User from "./models/user.model.js";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Handle missing emails
        const email =
          profile.emails && profile.emails[0]?.value
            ? profile.emails[0].value
            : `${profile.username}@github-placeholder.com`;

        // Find or create the user
        let user = await User.findOne({
          providerId: profile.id,
          authProvider: "github",
        });

        if (!user) {
          user = await User.create({
            authProvider: "github",
            providerId: profile.id,
            username: profile.username,
            email, // Use the resolved email
            img: profile.photos[0]?.value || null,
          });
        }

        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// Serialize user for session (not used in stateless JWT setup)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

export default passport;
