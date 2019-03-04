export default {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 64,
        backgroundColor: '#ecf0f1'
      },
      myRangeWrap: {
        width: 200
      },
      
      sliderLabels: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center'
        
      },
      
        backgroundSlider: {
            width: '100%'
        },
        
        startSlider: {
            position: 'absolute',
            width: '100%',
            left: 0,
            transform: [{ rotateY:'180deg' }]
        },
        
        endSlider: {
            // position: 'absolute',
            // width: '100%',
            // right: 0
        },
}