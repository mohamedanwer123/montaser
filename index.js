import {AppRegistry} from 'react-native';
import Splash from './src/screens/Splash';
import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('Splash', () => Splash);

Navigation.setDefaultOptions({
    topBar: {
        visible: false
    }
})


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Splash',
            },
          },
        ],
      },
    },
  });
});
