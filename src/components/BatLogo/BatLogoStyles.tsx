import { StyleSheet } from 'react-native';

export const batLogoStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#565b7d',
    borderTopColor: '#fff',
    borderBottomColor: '#fff',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: '#E5BF3C',
    fontWeight: 'bold',
  },
  logo: {
    resizeMode: 'contain',
    height: 180,
  }
});