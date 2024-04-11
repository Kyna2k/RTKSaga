import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput} from '../common/components/textinput/TextInput';
import {useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { getLoadingState } from '../redux/selectors/loading.selector';
import { LoadingActions } from '../redux/reducers/loading.reducer';
import { store } from '../redux/store';
import EncryptedStorage from 'react-native-encrypted-storage';
import { AuthActions } from '../redux/reducers/aut.reducer';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
type InPutInfo = {
  username: string;
  password: string;
};

const LoginScreen: React.FunctionComponent = () => {
  const [inputInfo, setInputInfo] = useState<InPutInfo>({
    username: 'huynobi1809@gmail.com',
    password: '',
  });
  const useSelector = useAppSelector(getLoadingState);
    const useDispatch = useAppDispatch();
  const onChangeUserNameText = (text: string) => {
    setInputInfo({...inputInfo, username: text});
  };
  const onChangePassWordText = (text: string) => {
    setInputInfo({...inputInfo, password: text});
  };
  useEffect(() => {
    const check = async() => {
      const data  = await EncryptedStorage.getItem("persist:root");
      const persistedState = JSON.parse(data!);
      console.log(persistedState);
    }
    check()
  })
  const handlerLogin = async () => {
   
   useDispatch(AuthActions.handleLogin({email : inputInfo.username}))

  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={style.container}>
        <Text style={style.title}>Username</Text>
        <TextInput
          value={inputInfo.username}
          clearButtonMode="always"
          style={style.input}
          onChangeText={onChangeUserNameText}
        />
        <Text style={style.title}>Password</Text>
        <TextInput
            
          secureTextEntry={true}
          style={style.input}
          onChangeText={onChangePassWordText}
        />
        <TouchableOpacity style={style.containerButton} onPress={handlerLogin}>
          <View style={style.button}>
            <Text style={{color: 'white'}}>SignIn</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    alignSelf: 'flex-start',
    color: 'black',
    marginBottom: 10,
    top: 5,
  },
  input: {
    width: '100%',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  containerButton: {
    width: '100%',
    marginHorizontal: 30,
  },
  button: {
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'blue',
  },
});

export default LoginScreen;
