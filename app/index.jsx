import { useRouter } from "expo-router";
import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from "../constants/theme";
import { useAuth } from "../contexts/AuthContext";
import { hp, wp } from "../helpers/common";

const Index = () => {
    const router = useRouter();
    const { user, isInitialized } = useAuth();

    useEffect(() => {
        // Add a small delay to let the animation play
        const timer = setTimeout(() => {
            try {
                if (isInitialized) {
                    if (user) {
                        console.log('User authenticated, navigating to home');
                        router.replace('/(tabs)/home');
                    } else {
                        console.log('No user, navigating to welcome');
                        router.replace('/welcome');
                    }
                }
            } catch (error) {
                console.error('Navigation error:', error);
                // Fallback navigation
                router.replace('/welcome');
            }
        }, 3000); // 3 second delay to show the animation

        return () => clearTimeout(timer);
    }, [user, isInitialized, router]);

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../assets/animations/welcome.json')}
                style={styles.animation}
                autoPlay
                loop={false}
                resizeMode="contain"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primaryDark,
    },
    animation: {
        width: wp(80),
        height: hp(30),
    }
});

export default Index
