const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const Axios = require("axios");
var JwtCookieComboStrategy = require("passport-jwt-cookiecombo");

passport.use(
    new StrategyJwt(
    {
    jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
            return req.cookies["_auth"];
        },
    ]), 
    secretOrKey: "jwtS12345%*&skjvgh",
    }, 
    function (jwtPayload, done) {
        Axios.post("http://localhost:5000/database/currentUser/",{
            email: jwtPayload.email
        }).then((user) => {
            return done(null, user);
        }).catch((err) => {
            return done((err));
        });
    }
    )
);
