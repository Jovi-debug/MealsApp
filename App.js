import { StyleSheet} from 'react-native';
import CatScreen from './screens/CatScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <CatScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
