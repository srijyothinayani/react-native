import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
const deviceType = 'Phone';//services.getDevice(width, height);
// const { backgroundTheme } = require('../../../config/themes/variable');
export default {
    mainContainer: {
        flex: 1,
        // backgroundColor:backgroundTheme,
        padding: 0,
        flexDirection: deviceType === 'Tablet' ? 'row' : null
    },
    upperContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    dataTextStyles: {
        fontSize: deviceType === 'Tablet' ? 18 : 12,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center'
    },
    dataMyTextStyles: {
        fontSize: deviceType === 'Tablet' ? 20 : 16,
        color: '#005b8e',
        fontWeight: '400',
        textAlign: 'center',
        padding: 5
    },
    dataMMyTextStyles: {
        fontSize: deviceType === 'Tablet' ? 20 : 10,
        color: '#005b8e',
        elevation: 5,
        fontWeight: '400',
        textAlign: 'center'
    },
    normalMTopTextStyle: {
        fontSize: deviceType === 'Tablet' ? 20 : 10,
        fontWeight: '400',
        textAlign: 'center'
    },
    TopHeadingTextStyle: {
        fontSize: deviceType === 'Tablet' ? 20 : 20,
        fontWeight: '400',
        textAlign: 'center',
        color: 'black'
    },
    imageStyle: {
        flex: 1,
        height: 50,
        width: 50,
        borderRadius: Platform.OS === 'ios' ? 26 : 50
    },
    iconStyle: {
        elevation: 5,
        textAlign: 'center'
    },
    footerIconColor: 'black',
    commonStyles: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
        padding: 5
    },
    TextStyle: {
        color: 'black',
        padding: 5,
        fontSize: 18,
        fontWeight: '400'
    },
    innerContentBox: {
        flex: 0.4,
        alignSelf: 'center',
        padding: 5
    },
    pageContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    myMContainers: {
        height: deviceType === 'Tablet' ? 170 : 105,
        width: deviceType === 'Tablet' ? width / 1.15 : width,
        marginLeft: 10,
        marginRight: 10,
        margin: 3
    },
    commonMContainer: {
        flex: 0.2,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 1
    },
    headingContentText: {
        flex: 0.2,
        marginLeft: deviceType === 'Tablet' ? 0 : 10,
        padding: 5,
        color: '#005b8e',
        fontSize: deviceType === 'Tablet' ? 20 : 14,
        fontWeight: '400',
        top: 5
    },
    shortCardView: {
        backgroundColor: 'white',
        height: deviceType === 'Tablet' ? 200 : 100,
        width: deviceType === 'Tablet' ? 200 : width / 3.5,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0.2, height: 0.2 },
        elevation: 5,
        margin: deviceType === 'Tablet' ? 10 : Platform.OS === 'ios' ? -8 : -10,
        marginLeft: deviceType === 'Tablet' ? 0 : 15,
        marginBottom: 5,
        marginTop: Platform.OS === 'ios' ? 0 : 10,
        justifyContent: 'center',
        borderColor: 'white',
        borderRadius: 5,
        right: 7,
        borderWidth: deviceType === 'Tablet' ? 1 : 0.5
    },
    mobileViewData: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        alignSelf: 'center'
    },
    logoStyle: {
        height: deviceType === 'Tablet' ? 150 : 100,
        width: deviceType === 'Tablet' ? 150 : 100
    },
    mobileViewData1: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        margin: Platform.OS === 'ios' ? 8 : 10,
        marginTop: -25,
        //  flexDirection: 'column',
        justifyContent: 'center',
        //alignItems: 'stretch',
    },
    myQuizzesContainer: {
        height: deviceType === 'Tablet' ? 280 : 160,
        width: deviceType === 'Tablet' ? width / 1.15 : width,
        marginLeft: 10,
        marginRight: 10,
        margin: deviceType === 'Tablet' ? 10 : 3
    },
    imageContainer: {
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1
    },
    quizIcon: {
        fontSize: 25,
        color: '#ffffff'
    },
    tryAQuizstyles: {
        flex: 1,
        flexDirection: 'row',
        marginTop: -55,
        margin: 5
    },
    tryQuiz: {
        flex: 1,
        height: deviceType === 'Tablet' ? 100 : 60,
        width: deviceType === 'Tablet' ? 130 : 100,
        backgroundColor: 'white',
        margin: deviceType === 'Tablet' ? 15 : 8,
        elevation: deviceType === 'Tablet' ? 3 : 5,
        borderRadius: 5,
        borderWidth: Platform.OS === 'ios' ? 0.2 : 0,
        alignSelf: 'center',
        marginTop: deviceType === 'Tablet' ? -8 : 15
    },
    choiceText: {
        fontSize: deviceType === 'Tablet' ? 20 : 12,
        fontWeight: '200',
        marginLeft: 5
    },
    choiceIcon: {
        fontSize: deviceType === 'Tablet' ? 30 : 20,
        color: '#2bbbad'
    },
    videoIcon: {
        fontSize: deviceType === 'Tablet' ? 30 : 20,
        color: '#4285f4'
    },
    audioIcon: {
        fontSize: deviceType === 'Tablet' ? 30 : 20,
        color: '#aa66cc'
    },
    myactivitystyles: {
        //height: deviceType === 'Tablet' ? 80 : 20,
        // width: deviceType === 'Tablet' ? 200 : 100,
        flex: 1,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 5,
        borderWidth: deviceType === 'Tablet' ? 0.2 : Platform.OS === 'ios' ? 0.2 : 0.1
    },
    myActivity: {
        height: deviceType === 'Tablet' ? 80 : 60,
        width: deviceType === 'Tablet' ? 200 : 100,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 5,
        borderWidth: Platform.OS === 'ios' ? 0.2 : 0
    },
    myActivityStyle: {
        height: deviceType === 'Tablet' ? 80 : 60,
        width: deviceType === 'Tablet' ? 200 : 100,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 5,
        borderWidth: Platform.OS === 'ios' ? 0.2 : 0
    },
    myInterviewStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    myInterviewIcon: {
        alignSelf: 'center',
        bottom: deviceType === 'Tablet' ? 15 : 22,
        height: deviceType === 'Tablet' ? 60 : 30,
        width: deviceType === 'Tablet' ? 60 : 30
    },
    myInterviewHeadLineStyle: {
        fontSize: deviceType === 'Tablet' ? 18 : 12,
        color: 'black',
        fontWeight: '200',
        textAlign: 'center',
        bottom: deviceType === 'Tablet' ? 8 : 15
    },
    myInterviewBottomText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 5
    },
    myinteBottomText2: {
        fontSize: deviceType === 'Tablet' ? 18 : 10,
        fontWeight: '200',
        justifyContent: 'center',
        bottom: 10
    },
    choiceStyles: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: deviceType === 'Tablet' ? 35 : 18
    },
    jobsStyles: {
        alignItems: 'center',
        marginTop: 30
    },
    jobImageStyles: {
        alignSelf: 'center',
        bottom: 28,
        height: deviceType === 'Tablet' ? 60 : 30,
        width: deviceType === 'Tablet' ? 60 : 30
    },
    jobTextHead: {
        fontSize: deviceType === 'Tablet' ? 18 : Platform.OS === 'ios' ? 11.5 : 10.5,
        color: 'black',
        fontWeight: deviceType === 'Tablet' ? '400' : '200',
        textAlign: 'center',
        bottom: 20,
        margin: 5
    },
    jobsTextStyle: {
        marginTop: -20,
        height: 40
    },
    jobBorderTextView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    jobBorderTextLeft: {
        fontSize: deviceType === 'Tablet' ? 18 : 10,
        justifyContent: 'flex-start',
        top: -12
    },
    jobBorderTextRight: {
        fontSize: deviceType === 'Tablet' ? 18 : 10,
        justifyContent: 'flex-end',
        top: -6
    },
    activityIndi: {
        flex: 1,
        marginLeft: deviceType === 'Tablet' ? 250 : 180
    },
    featuresStyles: {
        margin: 5,
        marginLeft: 8,
        backgroundColor: 'white'
    },
    carouselImageStyle: {
        alignSelf: 'center',
        height: deviceType === 'Tablet' ? 50 : 30,
        width: deviceType === 'Tablet' ? 50 : 30
    },
    myInterviewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    featureStyle: {
        flex: 1,
        backgroundColor: 'white',
        margin: 5
    },
    featureStyleText: {
        fontSize: deviceType === 'Tablet' ? 20 : 16,
        fontWeight: '400',
        color: '#005b8e',
        margin: 5
    },
    featuresStylesView: {
        margin: deviceType === 'Tablet' ? 12 : Platform.OS === 'ios' ? 12 : 10,
        height: deviceType === 'Tablet' ? 120 : 70,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 0.3,
        borderColor: '#98a598',
        borderRadius: Platform.OS === 'ios' ? 2 : 0
    },
    featureImageView: {
        height: deviceType === 'Tablet' ? 70 : 50,
        width: deviceType === 'Tablet' ? 70 : 50,
        borderRadius: 100,
        backgroundColor: '#edeeef',
        alignItems: 'center',
        justifyContent: 'center',
        left: deviceType === 'Tablet' ? 20 : 10,
        elevation: 5
    },
    featureView: {
        height: deviceType === 'Tablet' ? 80 : 50,
        width: 1,
        backgroundColor: '#c9d1d8',
        marginLeft: deviceType === 'Tablet' ? 60 : 30
    },
    featureViewStyleBox: {
        justifyContent: 'center',
        marginLeft: 12
    },
    featureTextStyle: {
        alignSelf: 'flex-start',
        fontSize: deviceType === 'Tablet' ? 20 : 14,
        fontWeight: deviceType === 'Tablet' ? '400' : '300',
        color: '#119cf7'
    },
    featuretextView: {
        fontSize: deviceType === 'Tablet' ? 20 : Platform.OS === 'ios' ? 10.5 : 11
    },
    featureViewStylesMargin: {
        marginTop: -13
    },
    cardsHeading: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    },
    viewAllStyle: {
        height: deviceType === 'Tablet' ? 35 : 25,
        width: deviceType === 'Tablet' ? 80 : 55,
        backgroundColor: '#2da1f6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        bottom: -1,
        borderRadius: 20,
        marginTop: 5
    },
    headingText: {
        color: 'white',
        textAlign: 'center',
        fontSize: deviceType === 'Tablet' ? 16 : 10,
        fontWeight: '600'
    },
    tabFotter: {
        height: 30,
        backgroundColor: 'white'
    },
    dashboardFooterStyle: {
        backgroundColor: 'white'
    },
    dashboardFooterTabStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    dashboardFooterIconStyle: {
        color: 'black',
        fontSize: 20
    },
    dashboardFooterTextStyle: {
        fontSize: 10,
        textAlign: 'center'
    },
    spinnerContainer: {
        height: height - 150,
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    scrollViewStyle: {
        flex: 1
    }
};