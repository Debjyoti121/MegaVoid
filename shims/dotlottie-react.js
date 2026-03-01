// Stub for @lottiefiles/dotlottie-react – prevents framer-motion/tslib crash on web
const React = require('react');
const DotLottieReact = React.forwardRef((props, ref) => null);
DotLottieReact.displayName = 'DotLottieReact';
module.exports = { DotLottieReact };
