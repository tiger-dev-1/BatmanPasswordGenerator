import { StyleSheet } from 'react-native';

export const batLogoStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E5BF3C',
    borderWidth: 3,
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#E5BF3C',
    fontWeight: 'bold',
  },
  logo: {
    resizeMode: 'contain',
    height: 180,
  }
});