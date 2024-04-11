import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getLoadingState} from '../../../redux/selectors/loading.selector';

export const LoadingComponent: React.FunctionComponent = () => {
  const isLoading = useSelector(getLoadingState);
  
  if (!isLoading.isLoading) {
    return <View />;
  }
  return <View style={style.overlay}>
    <ActivityIndicator size="small" color="#0000ff" />
  </View>
};

const style = StyleSheet.create({
    overlay : {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent : 'center',
        zIndex: 9999,
        alignItems: 'center',
        backgroundColor : 'rgba(52, 52, 52, 0.8)'
    }
})