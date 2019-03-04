import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const deviceType = 'Phone';
const defaultColor = '#2da1f6'; 
export default {
    mainContainer: {
        flex: 1
    },
    defaultContainer: {
        flex: 1
    },
    defaultColor: defaultColor,
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    logoStyle: {
        height: deviceType === 'Tablet' ? 150 : 72,
        width: deviceType === 'Tablet' ? 150 : 300
    },
    titleText: {
        fontSize: deviceType === 'Tablet' ? 25 : 20,
        color: defaultColor,
        fontWeight: '400'
    },
    customLoginView: {
        flex: 3,
        marginLeft: deviceType === 'Tablet' ? 50 : 30,
        marginRight: deviceType === 'Tablet' ? 50 : 30
    },
    itemStyle: {
        margin: 10,
        borderWidth: Platform.OS === 'ios' ? 2 : 1
    },
    iconSpace: {
        margin: 10,
        color: 'black'
    },
    signInSelectButton: {
        backgroundColor: 'white',
        height: deviceType === 'Tablet' ? 50 : 40,
        marginLeft: deviceType === 'Tablet' ? 90 : 60,
        marginRight: deviceType === 'Tablet' ? 90 : 60,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: defaultColor,
        marginTop: deviceType === 'Tablet' ? 50 : 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInUnSelectButton: {
        backgroundColor: defaultColor,
        height: deviceType === 'Tablet' ? 50 : 40,
        marginLeft: deviceType === 'Tablet' ? 90 : 60,
        marginRight: deviceType === 'Tablet' ? 90 : 60,
        borderRadius: 25,
        marginTop: deviceType === 'Tablet' ? 50 : 30,
        borderWidth: 1,
        borderColor: defaultColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInSelectButtonColor: {
        color: defaultColor,
        fontSize: deviceType === 'Tablet' ? 20 : 18
    },
    signInUnSelectButtonColor: {
        color: 'white',
        fontSize: deviceType === 'Tablet' ? 20 : 18
    },
    orContainer: {
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    orText: {
        fontSize: deviceType === 'Tablet' ? 30 : 18,
        fontWeight: '400'
    },
    socialIconsView: {
        marginBottom: 20,
        marginLeft: deviceType === 'Tablet' ? 60 : 30,
        marginRight: deviceType === 'Tablet' ? 60 : 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    fbLoginButton: {
        backgroundColor: '#3b5998',
        height: deviceType === 'Tablet' ? 60 : 45,
        width: deviceType === 'Tablet' ? 60 : 45,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    googleLoginButton: {
        backgroundColor: '#d62d20',
        height: deviceType === 'Tablet' ? 60 : 45,
        width: deviceType === 'Tablet' ? 60 : 45,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    githubLoginButton: {
        backgroundColor: '#24292e',
        height: deviceType === 'Tablet' ? 60 : 45,
        width: deviceType === 'Tablet' ? 60 : 45,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    linkedInLoginButton: {
        backgroundColor: '#0077b5',
        height: deviceType === 'Tablet' ? 60 : 45,
        width: deviceType === 'Tablet' ? 60 : 45,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    extraContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: deviceType === 'Tablet' ? 20 : 1
    },
    extrasTextStyle: {
        color: defaultColor,
        fontSize: deviceType === 'Tablet' ? 20 : 16,
        fontWeight: '400'
    },
    spinnerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBoxStyle: {
        alignSelf: 'center',
        fontSize: deviceType === 'Tablet' ? 16 : 14
    }
};