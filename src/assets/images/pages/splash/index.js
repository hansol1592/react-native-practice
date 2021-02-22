import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

function SplashPage() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <div>Welcome page</div>;
}

export default SplashPage;
