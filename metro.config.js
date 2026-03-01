const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add lottie file support
config.resolver.assetExts.push('lottie');

// Enable package exports resolution (helps with ESM packages)
config.resolver.unstable_enablePackageExports = true;

// Stub out @lottiefiles/dotlottie-react to avoid loading it on web
// Force tslib to its CJS entry (fixes "Cannot destructure '__extends'" error)
config.resolver.extraNodeModules = {
    ...config.resolver.extraNodeModules,
    '@lottiefiles/dotlottie-react': path.resolve(__dirname, 'shims/dotlottie-react.js'),
    'tslib': path.resolve(__dirname, 'node_modules/tslib/tslib.js'),
};

module.exports = config;